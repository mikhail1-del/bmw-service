import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  width?: "sm" | "md" | "full";
}

const widthStyles = {
  sm: "w-12",
  md: "w-24",
  full: "w-full",
};

export function GoldDivider({ className, width = "md" }: GoldDividerProps) {
  return (
    <div
      className={cn("gold-divider", widthStyles[width], className)}
      aria-hidden
    />
  );
}
