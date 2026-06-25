import * as React from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface DatePickerProps {
  label?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

export function DatePicker({
  label,
  value,
  onChange,
  placeholder = "Pilih tanggal...",
  minDate,
  maxDate,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label className="text-[12px] font-semibold text-gray-600">
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "h-10 w-full justify-start rounded-lg border border-gray-200 bg-white px-3 text-left text-[13px] font-normal hover:bg-gray-50",
              !value && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
            {value
              ? format(value, "d MMMM yyyy", { locale: id })
              : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="z-[9999] w-auto p-0" align="start">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange?.(date);
              setOpen(false);
            }}
            locale={id}
            disabled={[
              ...(minDate ? [{ before: minDate }] : []),
              ...(maxDate ? [{ after: maxDate }] : []),
            ]}
            classNames={{
              root: "p-3",
              months: "flex flex-col",
              month: "space-y-4",
              month_caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium",
              nav: "space-x-1 flex items-center",
              button_previous: cn(
                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 top-1",
              ),
              button_next: cn(
                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 top-1",
              ),
              month_grid: "w-full border-collapse space-y-1",
              weekdays: "flex",
              weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              week: "flex w-full mt-2",
              day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day_button: cn(
                "h-9 w-9 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",
              ),
              range_end: "day-range-end",
              selected: "bg-red-600 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white rounded-md",
              today: "bg-accent text-accent-foreground rounded-md",
              outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
              disabled: "text-muted-foreground opacity-50",
              range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              hidden: "invisible",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
