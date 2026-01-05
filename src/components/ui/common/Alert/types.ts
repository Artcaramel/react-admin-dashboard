import type { ReactNode } from "react";

export type CommonAlertVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface CommonAlertProps {
  variant?: CommonAlertVariant;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  className?: string;
}
