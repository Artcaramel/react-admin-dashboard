import { useState } from "react";
import { Confirm } from "@/components/ui/common/Confirm";

type ConfirmOptions = {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
};

export function useConfirm() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const [resolver, setResolver] = useState<(value: boolean) => void>();

  const confirm = (opts: ConfirmOptions) => {
    setOptions(opts);
    setOpen(true);

    return new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
    });
  };

  const handleConfirm = () => {
    setOpen(false);
    resolver?.(true);
  };

  const handleCancel = () => {
    setOpen(false);
    resolver?.(false);
  };

  const ConfirmDialog = open && options && (
    <Confirm
      open={open}
      title={options.title}
      description={options.description}
      confirmText={options.confirmText}
      cancelText={options.cancelText}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );

  return {
    confirm,
    ConfirmDialog,
  };
}
