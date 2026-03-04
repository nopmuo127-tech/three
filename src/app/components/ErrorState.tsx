import { AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "حدث خطأ ما",
  message = "نعتذر، حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى.",
  onRetry
}: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center py-8">
      <div className="text-center px-6">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-[#EF4444]" />
        </div>
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">{title}</h2>
        <p className="text-[#64748B] max-w-md mx-auto mb-8">{message}</p>
        {onRetry && (
          <Button variant="primary" size="md" onClick={onRetry}>
            إعادة المحاولة
          </Button>
        )}
      </div>
    </div>
  );
}
