import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FormError, NoticeForm } from "./types/notice";
import {
  addNotice,
  getNoticeById,
  updateNotice,
} from "@/localStorage/noticeStorage";
import { useAlertStore } from "@/stores/alertStore";
import { useConfirm } from "@/hooks/useConfirm";

export function NoticeCreatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const showAlert = useAlertStore((s) => s.show);
  const { confirm, ConfirmDialog } = useConfirm();

  const isEditMode = Boolean(id);

  const initialForm = useMemo<NoticeForm>(() => {
    if (!isEditMode) {
      return { title: "", content: "", writer: "" };
    }

    const notice = getNoticeById(Number(id));
    return notice
      ? {
          title: notice.title,
          content: notice.content,
          writer: notice.writer,
        }
      : { title: "", content: "", writer: "" };
  }, [id, isEditMode]);

  const [form, setForm] = useState<NoticeForm>(initialForm);
  const [errors, setErrors] = useState<FormError>({});

  useEffect(() => {
    setForm(initialForm);
  }, [initialForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors: FormError = {};

    if (!form.title.trim()) {
      newErrors.title = "제목을 입력해주세요.";
    }

    if (!form.writer.trim()) {
      newErrors.writer = "작성자를 입력해주세요.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      showAlert({
        variant: "error",
        title: isEditMode ? "수정 실패" : "등록 실패",
        description: Object.values(newErrors)[0],
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    if (isEditMode) {
      const confirmCheck = await confirm({
        title: "수정 확인",
        description: "정말 수정하시겠습니까?",
        confirmText: "수정",
        cancelText: "취소",
      });

      if (!confirmCheck) return;

      updateNotice(Number(id), form);
      showAlert({
        variant: "info",
        title: "수정 성공",
        description: "공지사항이 수정되었습니다.",
      });
    } else {
      addNotice(form);
      showAlert({
        variant: "info",
        title: "등록 성공",
        description: "공지사항 등록 완료 했습니다.",
      });
    }

    navigate("/common/notice");
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h3 className="text-xl font-semibold">
          {isEditMode ? "공지사항 수정" : "공지사항 등록"}
        </h3>
        <p className="text-sm text-muted-foreground">
          {isEditMode
            ? "공지사항을 수정합니다."
            : "새로운 공지사항을 등록합니다."}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>공지사항</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">제목</label>
            <Input
              name="title"
              placeholder="공지 제목을 입력하세요"
              value={form.title}
              onChange={handleChange}
              aria-invalid={!!errors.title}
              className={
                errors.title ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">작성자</label>
            <Input
              name="writer"
              placeholder="작성자 이름"
              value={form.writer}
              onChange={handleChange}
              aria-invalid={!!errors.writer}
              className={
                errors.writer ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">내용</label>
            <Textarea
              name="content"
              placeholder="공지 내용을 입력하세요"
              rows={6}
              value={form.content}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => navigate(-1)}>
              취소
            </Button>
            <Button onClick={handleSubmit}>
              {isEditMode ? "수정" : "등록"}
            </Button>
            {ConfirmDialog}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
