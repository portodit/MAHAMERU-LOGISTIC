import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

const font = { fontFamily: "var(--font-poppins), 'Poppins', Helvetica" };

const ports = [
  { value: "jakarta", label: "Jakarta" },
  { value: "surabaya", label: "Surabaya" },
  { value: "banjarmasin", label: "Banjarmasin" },
];

const kebutuhanOptions = [
  { value: "fcl", label: "FCL — 1 Kontainer Penuh" },
  { value: "lcl", label: "LCL — Kurang dari 1 Kontainer" },
  { value: "project", label: "Project Cargo" },
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[12px] font-semibold text-gray-600" style={font}>
      {children}
    </label>
  );
}

export const ShipmentTrackingSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"cek" | "ajukan">("cek");
  const [inputs, setInputs] = useState<string[]>(["", "", "", ""]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shipFrom, setShipFrom] = useState("");
  const [shipTo, setShipTo] = useState("");
  const [tanggal, setTanggal] = useState<Date | undefined>(undefined);
  const [kebutuhan, setKebutuhan] = useState("");

  const updateInput = (index: number, value: string) => {
    setInputs((prev) => prev.map((inp, i) => (i === index ? value : inp)));
  };

  const isEnabled = (index: number) =>
    index === 0 || inputs.slice(0, index).every((v) => v.trim() !== "");

  return (
    <section className="w-full">
      <Card className="w-full rounded-[20px] border-0 bg-white shadow-[0px_16px_40px_0px_rgba(15,27,36,0.18)]">
        <CardContent className="p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:gap-4">

            <nav className="flex w-full items-stretch gap-1 rounded-[8px] border border-[#e0e0e0] bg-[#fde8e8] p-1">
              <button
                type="button"
                onClick={() => setActiveTab("cek")}
                className={`flex flex-1 items-center justify-center rounded-[6px] px-3 py-2.5 text-[13px] font-semibold leading-tight transition-all duration-200 ${
                  activeTab === "cek"
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-transparent text-red-600 hover:bg-red-100"
                }`}
                style={font}
              >
                Cek Pengiriman
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ajukan")}
                className={`flex flex-1 items-center justify-center rounded-[6px] px-3 py-2.5 text-[13px] font-semibold leading-tight transition-all duration-200 ${
                  activeTab === "ajukan"
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-transparent text-red-600 hover:bg-red-100"
                }`}
                style={font}
              >
                Ajukan Pengiriman
              </button>
            </nav>

            {activeTab === "cek" && (
              <div className="flex flex-col gap-3 sm:gap-4">
                <div
                  ref={scrollRef}
                  className="flex max-h-[160px] sm:max-h-[240px] flex-col gap-0 overflow-y-auto"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "#dc2626 #fee2e2" }}
                >
                  {inputs.map((value, index) => {
                    const enabled = isEnabled(index);
                    return (
                      <input
                        key={`tracking-input-${index}`}
                        type="text"
                        value={value}
                        onChange={(e) => updateInput(index, e.target.value)}
                        disabled={!enabled}
                        placeholder="Ketikkan nomor pengiriman"
                        className={`h-11 sm:h-14 w-full shrink-0 border-0 border-b border-[#e5e7eb] px-1 text-sm sm:text-[14px] font-medium transition-colors focus:outline-none
                          ${enabled
                            ? "bg-white text-gray-800 placeholder:text-[#9ca3af] focus:border-red-400"
                            : "cursor-not-allowed bg-white text-gray-300 placeholder:text-[#d1d5db]"
                          }`}
                        style={font}
                      />
                    );
                  })}
                </div>

                <div className="flex-1" />

                <Button
                  type="button"
                  className="h-11 sm:h-[52px] w-full rounded-lg bg-grays text-sm sm:text-[15px] font-semibold text-white hover:bg-grays/90"
                  style={font}
                >
                  Cek Lokasi
                </Button>
              </div>
            )}

            {activeTab === "ajukan" && (
              <div className="flex flex-1 flex-col gap-4">

                <div className="flex flex-col gap-1.5">
                  <FieldLabel>Ship From</FieldLabel>
                  <Select value={shipFrom} onValueChange={setShipFrom}>
                    <SelectTrigger style={font}>
                      <SelectValue placeholder="Pilih kota asal..." />
                    </SelectTrigger>
                    <SelectContent style={font as React.CSSProperties}>
                      {ports.map((p) => (
                        <SelectItem key={p.value} value={p.value} style={font as React.CSSProperties}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <FieldLabel>Ship To</FieldLabel>
                  <Select value={shipTo} onValueChange={setShipTo}>
                    <SelectTrigger style={font}>
                      <SelectValue placeholder="Pilih kota tujuan..." />
                    </SelectTrigger>
                    <SelectContent style={font as React.CSSProperties}>
                      {ports.map((p) => (
                        <SelectItem key={p.value} value={p.value} style={font as React.CSSProperties}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <DatePicker
                  label="Rencana Tanggal Pengiriman"
                  value={tanggal}
                  onChange={setTanggal}
                  placeholder="Pilih tanggal..."
                  minDate={new Date()}
                />

                <div className="flex flex-col gap-1.5">
                  <FieldLabel>Kebutuhan</FieldLabel>
                  <Select value={kebutuhan} onValueChange={setKebutuhan}>
                    <SelectTrigger style={font}>
                      <SelectValue placeholder="Pilih jenis muatan..." />
                    </SelectTrigger>
                    <SelectContent style={font as React.CSSProperties}>
                      {kebutuhanOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value} style={font as React.CSSProperties}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1" />

                <Button
                  type="button"
                  className="h-11 sm:h-[52px] w-full rounded-lg bg-grays text-sm sm:text-[15px] font-semibold text-white hover:bg-grays/90"
                  style={font}
                >
                  Ajukan Sekarang
                </Button>
              </div>
            )}

          </div>
        </CardContent>
      </Card>
    </section>
  );
};
