import { CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SuccessMessageProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

export function SuccessMessage({ isVisible, message, onClose }: SuccessMessageProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-white border border-[#22C55E] rounded-xl shadow-2xl p-4 flex items-center gap-3 min-w-[320px]">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#22C55E]" />
            </div>
            <p className="flex-1 text-[#1E3A8A] font-medium">{message}</p>
            <button
              onClick={onClose}
              className="w-8 h-8 hover:bg-[#F1F5F9] rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-[#64748B]" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
