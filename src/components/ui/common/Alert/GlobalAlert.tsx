import { Alert } from "@/components/ui/common/Alert";
import { useAlertStore } from "@/stores/alertStore";

export function GlobalAlert() {
  const { open, variant, title, description, close } = useAlertStore();

  if (!open) return null;

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
      onClick={close}
    >
      <Alert variant={variant} title={title} description={description} />
    </div>
  );
}
