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
    // Auto restart settings
    exp_backoff_restart_delay: 100,
    max_restarts: 10,
    min_uptime: 5000,
    // Graceful shutdown
    kill_timeout: 5000,
    listen_timeout: 10000,
    // Logging
    error_file: '/home/ivalora/.pm2/logs/mahameru-error.log',
    out_file: '/home/ivalora/.pm2/logs/mahameru-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    // Restart policy
    restart_delay: 4000,
  }]
};
