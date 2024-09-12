import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export function LocaleCalendar(props: any) {
  return (
    <Calendar
      {...props}
      locale={ko}
      components={{
        Caption: ({ displayMonth }) => (
          <div className="flex justify-center text-sm font-medium">
            {format(displayMonth, "yyyy년 M월", { locale: ko })}
          </div>
        ),
      }}
    />
  );
}
