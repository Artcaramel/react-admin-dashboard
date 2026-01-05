import { useState } from "react";
import { Alert } from "@/components/ui/common/Alert";
import { Button } from "@/components/ui/common/Button";
import { useConfirm } from "@/hooks/useConfirm";

type AlertType = "info" | "success" | "warning" | "error" | null;

export function AlertView() {
  const [alertType, setAlertType] = useState<AlertType>(null);
  const { confirm, ConfirmDialog } = useConfirm();

  const handleSave = async () => {
    const confirmCheck = await confirm({
      title: "저장 확인",
      description: "정말 저장하시겠습니까?",
      confirmText: "저장",
      cancelText: "취소",
    });

    if (!confirmCheck) return;
  };

  const handleDelete = async () => {
    const confirmCheck = await confirm({
      title: "삭제 확인",
      description: "정말 삭제하시겠습니까?",
      confirmText: "삭제",
      cancelText: "취소",
    });

    if (!confirmCheck) return;
  };

  return (
    <div className="space-y-1">
      <div className="mb-2">
        <span className="font-semibold">Alert</span>
        <div className="flex gap-2 pt-2">
          <Button variant="outline" onClick={() => setAlertType("info")}>
            Info
          </Button>
          <Button variant="outline" onClick={() => setAlertType("success")}>
            Success
          </Button>
          <Button variant="outline" onClick={() => setAlertType("warning")}>
            Warning
          </Button>
          <Button variant="outline" onClick={() => setAlertType("error")}>
            Error
          </Button>
          <Button variant="outline" onClick={() => setAlertType(null)}>
            Reset
          </Button>
        </div>

        <div className="pt-2">
          {alertType === "info" && (
            <Alert
              variant="info"
              title="안내"
              description="이 작업은 관리자 권한이 필요합니다."
            />
          )}

          {alertType === "success" && (
            <Alert
              variant="success"
              title="성공"
              description="저장이 완료되었습니다."
            />
          )}

          {alertType === "warning" && (
            <Alert
              variant="warning"
              title="주의"
              description="삭제 시 복구할 수 없습니다."
            />
          )}

          {alertType === "error" && (
            <Alert
              variant="error"
              title="오류"
              description="서버 오류가 발생했습니다."
            />
          )}
        </div>
      </div>
      <div className="py-2">
        <span className="font-semibold">Confirm</span>
        <div className="flex gap-2 pt-2">
          <Button variant="blue" onClick={handleSave}>
            저장
          </Button>

          <Button variant="destructive" onClick={handleDelete}>
            삭제
          </Button>

          {ConfirmDialog}
        </div>
      </div>
    </div>
  );
}
