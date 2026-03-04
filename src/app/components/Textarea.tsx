import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[#1E3A8A] mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl
            focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent
            transition-all duration-200 placeholder:text-[#94A3B8] resize-none
            disabled:bg-[#F1F5F9] disabled:cursor-not-allowed
            ${error ? "border-[#EF4444] focus:ring-[#EF4444]" : ""}
            ${className}`}
          rows={4}
          {...props}
        />
        {error && (
          <p className="text-[#EF4444] text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
