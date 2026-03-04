import { ReactNode } from "react";
import { FileQuestion } from "lucide-react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ 
  icon = <FileQuestion className="w-12 h-12" />, 
  title, 
  description,
  action 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-[#94A3B8] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">{title}</h3>
      {description && (
        <p className="text-[#64748B] text-sm text-center max-w-md mb-6">
          {description}
        </p>
      )}
      {action && action}
    </div>
  );
}
