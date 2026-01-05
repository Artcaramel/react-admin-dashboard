import {
  Alert as ShadcnAlert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { CheckCircle, Info, AlertTriangle, XCircle } from "lucide-react";
import type { CommonAlertProps } from "./types";

const variantConfig = {
  default: {
    className: "",
    icon: null,
  },
  info: {
    className: "border-blue-200 text-blue-900 dark:border-blue-800",
    icon: <Info className="h-4 w-4 text-blue-600" />,
  },
  success: {
    className: "border-green-200 text-green-900 dark:border-green-800",
    icon: <CheckCircle className="h-4 w-4 text-green-600" />,
  },
  warning: {
    className: "border-yellow-200 text-yellow-900 dark:border-yellow-800",
    icon: <AlertTriangle className="h-4 w-4 text-yellow-600" />,
  },
  error: {
    className: "border-red-200 text-red-900 dark:border-red-800",
    icon: <XCircle className="h-4 w-4 text-red-600" />,
  },
};

export function Alert({
  variant = "default",
  title,
  description,
  icon,
  className,
}: CommonAlertProps) {
  const config = variantConfig[variant];

  return (
    <ShadcnAlert
      className={cn("flex items-start gap-3", config.className, className)}
    >
      {(icon || config.icon) && (
        <div className="mt-1 shrink-0">{icon ?? config.icon}</div>
      )}

      <div className="space-y-1">
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </div>
    </ShadcnAlert>
  );
}
