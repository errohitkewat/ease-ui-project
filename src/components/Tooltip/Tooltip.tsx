import React, { useCallback, useEffect, useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
  "absolute z-50 whitespace-nowrap rounded-md font-medium pointer-events-none animate-fadeIn",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white shadow-lg",
        light: "bg-white text-gray-900 shadow-lg border border-gray-200",
        primary: "bg-indigo-600 text-white shadow-lg",
        outline:
          "bg-transparent border border-gray-400 text-gray-800 dark:border-gray-600 dark:text-gray-100 backdrop-blur-md",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
      placement: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "md",
      placement: "top",
    },
  }
);

const arrowVariants = cva("absolute w-2 h-2 rotate-45", {
  variants: {
    variant: {
      dark: "bg-slate-900",
      light: "bg-white border border-gray-200",
      primary: "bg-indigo-600",
      outline: "bg-transparent border border-gray-400 dark:border-gray-600",
    },
    placement: {
      top: "top-full left-1/2 -translate-x-1/2 -mt-1",
      bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
      left: "right-full top-1/2 -translate-y-1/2 -mr-1",
      right: "left-full top-1/2 -translate-y-1/2 -ml-1",
    },
  },
  defaultVariants: {
    variant: "dark",
    placement: "top",
  },
});

export interface TooltipProps
  extends VariantProps<typeof tooltipVariants>,
    Omit<React.HTMLAttributes<HTMLSpanElement>, "content"> {
  content: React.ReactNode;
  children: React.ReactNode;
  arrow?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  delay?: number;
  leaveDelay?: number;
  onOpenChange?: (open: boolean) => void;
}

const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
      content,
      children,
      className,
      arrow = true,
      open: controlledOpen,
      defaultOpen = false,
      delay = 150,
      leaveDelay = 0,
      onOpenChange,
      variant,
      size,
      placement = "top",
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const setOpen = useCallback(
      (value: boolean) => {
        if (controlledOpen === undefined) setInternalOpen(value);
        onOpenChange?.(value);
      },
      [controlledOpen, onOpenChange]
    );

    const handleShow = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setOpen(true), delay);
    };

    const handleHide = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setOpen(false), leaveDelay);
    };

    useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    return (
      <span
        ref={ref}
        className={cn("relative inline-flex", className)}
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onFocus={handleShow}
        onBlur={handleHide}
        {...props}
      >
        {children}
        {isOpen && (
          <span
            role="tooltip"
            className={cn(tooltipVariants({ variant, size, placement }))}
          >
            {content}
            {arrow && (
              <span
                className={cn(arrowVariants({ variant, placement }))}
                aria-hidden="true"
              />
            )}
          </span>
        )}
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
