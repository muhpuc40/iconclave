import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#111111] text-white hover:bg-[#1455D9] border border-transparent",
  outline:
    "bg-transparent text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white",
  ghost:
    "bg-transparent text-[#5F6368] border border-transparent hover:text-[#111111] hover:bg-[#F7F8FA]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm rounded-[8px] gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-[10px] gap-2",
  lg: "px-7 py-3.5 text-base rounded-[10px] gap-2",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled,
  external,
  className,
  type = "button",
  icon,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-40 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
        {icon && icon}
      </a>
    ) : (
      <Link href={href} className={baseClasses}>
        {children}
        {icon && icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
      {icon && icon}
    </button>
  );
}
