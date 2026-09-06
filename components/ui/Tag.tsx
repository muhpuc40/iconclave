import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-[#F7F8FA] text-[#5F6368] border border-[#E7E8EC]",
        className
      )}
    >
      {label}
    </span>
  );
}
