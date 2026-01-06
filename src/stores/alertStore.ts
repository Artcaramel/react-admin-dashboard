import { create } from "zustand";

export type AlertVariant = "default" | "info" | "success" | "warning" | "error";

let autoCloseTimer: ReturnType<typeof setTimeout> | null = null;

type AlertState = {
  open: boolean;
  variant: AlertVariant;
  title?: string;
  description?: string;
  show: (payload: {
    variant?: AlertVariant;
    title?: string;
    description?: string;
    duration?: number;
  }) => void;
  close: () => void;
};

export const useAlertStore = create<AlertState>((set) => ({
  open: false,
  variant: "default",
  title: "",
  description: "",

  show: ({ variant = "default", title, description, duration = 5000 }) => {
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer);
      autoCloseTimer = null;
    }

    set({
      open: true,
      variant,
      title,
      description,
    });

    autoCloseTimer = setTimeout(() => {
      set({ open: false });
      autoCloseTimer = null;
    }, duration);
  },

  close: () => {
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer);
      autoCloseTimer = null;
    }
    set({ open: false });
  },
}));
