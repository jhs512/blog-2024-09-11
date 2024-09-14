import { Calendar } from "@/components/ui/calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export function LocaleCalendar(props: any) {
  return (
    <Calendar
      {...props}
      locale={ko}
      components={{
        CaptionLabel: ({ displayMonth }) => (
          <div className="text-sm">
            {format(displayMonth, "yyyy년 MM월", { locale: ko })}
          </div>
        ),
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
      }}
    />
  );
}
