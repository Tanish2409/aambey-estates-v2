import { cn } from "@/lib/utils";
export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
