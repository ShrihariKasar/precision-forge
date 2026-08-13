import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const inputClass =
  "w-full rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

export function Field({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
  className,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  className?: string;
  placeholder?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <label htmlFor={name} className="label-xs text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder ?? ""}
          className={cn(inputClass, "mt-3 resize-y")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder ?? ""}
          className={cn(inputClass, "mt-3 min-h-11")}
        />
      )}
    </div>
  );
}

export function FormSuccess({
  title,
  text,
  onReset,
}: {
  title: string;
  text: string;
  onReset: () => void;
}) {
  return (
    <div role="status" className="rounded-md border border-border bg-surface p-10 md:p-14">
      <span className="grid size-12 place-items-center rounded-full border border-accent text-accent">
        <Check className="size-5" />
      </span>
      <h2 className="mt-8 text-2xl font-medium md:text-3xl">{title}</h2>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">{text}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 min-h-11 rounded-md border border-border-strong px-6 label-xs transition-colors hover:border-accent hover:text-accent"
      >
        Submit another
      </button>
    </div>
  );
}
