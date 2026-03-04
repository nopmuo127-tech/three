import { forwardRef, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[#1E3A8A] mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl
            focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent
            transition-all duration-200
            disabled:bg-[#F1F5F9] disabled:cursor-not-allowed
            ${error ? "border-[#EF4444] focus:ring-[#EF4444]" : ""}
            ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-[#EF4444] text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
