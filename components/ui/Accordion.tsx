"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  trigger: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-[#E7E8EC]", className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`acc-content-${item.id}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-label text-[#8A8F98] shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-semibold text-base transition-colors",
                    isOpen
                      ? "text-[#1455D9]"
                      : "text-[#111111] group-hover:text-[#1455D9]"
                  )}
                >
                  {item.trigger}
                </span>
              </div>
              <span
                className={cn(
                  "shrink-0 transition-colors",
                  isOpen ? "text-[#1455D9]" : "text-[#8A8F98]"
                )}
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`acc-content-${item.id}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pl-12 pr-4 text-[#5F6368] leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
