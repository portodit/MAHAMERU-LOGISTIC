# MAHAMERU Logistic - Deployment Guide

## Info Server
- **VPS**: IVALORASERVER (103.183.74.104)
- **OS**: Ubuntu 24.04.4 LTS
- **User**: ivalora
- **Project Path**: `/home/ivalora/MAHAMERU-LOGISTIC`

## Domain & URL
- **Domain**: mahamerutrans.com / www.mahamerutrans.com
- **URL**: https://mahamerutrans.com
- **Port**: 3000

## Tech Stack
- **Framework**: Next.js 16.2.6 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui patterns
- **Features**: Leaflet maps, date-fns, animations

## PM2 Management

### Status Check
```bash
pm2 status
```

### View Logs
```bash
pm2 logs mahameru
pm2 logs mahameru --lines 100 --nostream
```

### Restart
```bash
pm2 restart mahameru
```

### Stop/Start
```bash
pm2 stop mahameru
pm2 start mahameru
```

## Auto-Start Configuration

PM2 sudah dikonfigurasi dengan systemd service untuk auto-start saat server reboot.

### Systemd Service
- **Service Name**: pm2-ivalora.service
- **Status**: `sudo systemctl status pm2-ivalora.service`
- **Enabled**: Yes (otomatis start saat boot)

### Restart Policy
- `autorestart: true` - Auto restart jika crash
- `max_restarts: 10` - Max 10 restart dalam waktu singkat
- `exp_backoff_restart_delay: 100` - Exponential backoff (100ms base)
- `min_uptime: 5000` - Min 5 detik uptime sebelum dianggap stable
- `restart_delay: 4000` - Delay 4 detik antar restart

## Nginx Configuration

### Config File
```
/etc/nginx/sites-enabled/mahamerutrans.conf
```

### Proxy Settings
- Listens on port 443 (HTTPS) dan 80 (HTTP -> 443 redirect)
- Proxies to `http://127.0.0.1:3000`
- SSL Certificate dari Let's Encrypt

### Reload Nginx
```bash
sudo nginx -t && sudo nginx -s reload
```

## Ecosystem Config

File: `/home/ivalora/MAHAMERU-LOGISTIC/ecosystem.config.js`

```javascript
module.exports = {
  apps: [{
    name: 'mahameru',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/home/ivalora/MAHAMERU-LOGISTIC',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    exp_backoff_restart_delay: 100,
    max_restarts: 10,
    min_uptime: 5000,
    kill_timeout: 5000,
    listen_timeout: 10000,
    error_file: '/home/ivalora/.pm2/logs/mahameru-error.log',
    out_file: '/home/ivalora/.pm2/logs/mahameru-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    restart_delay: 4000,
  }]
};
```

## Troubleshooting

### App tidak accessible
1. Cek PM2 status: `pm2 status`
2. Cek port 3000: `ss -tlnp | grep 3000`
3. Cek logs: `pm2 logs mahameru`
4. Restart app: `pm2 restart mahameru`

### Nginx 502 Bad Gateway
1. Cek app running: `pm2 status`
2. Cek port: `ss -tlnp | grep 3000`
3. Reload nginx: `sudo nginx -s reload`

### App auto-restart terus
1. Cek logs: `pm2 logs mahameru`
2. Biasanya karena OOM atau port conflict
3. Cek memory: `free -h`

## Deployment

### Build
```bash
cd ~/MAHAMERU-LOGISTIC
npm run build
```

### Deploy
```bash
cd ~/MAHAMERU-LOGISTIC
pm2 restart mahameru
```

## Backup
- Source code ada di Git (`/home/ivalora/MAHAMERU-LOGISTIC/.git`)
- PM2 dump: `/home/ivalora/.pm2/dump.pm2`
- Logs: `/home/ivalora/.pm2/logs/`

## Last Updated
2026-07-14

