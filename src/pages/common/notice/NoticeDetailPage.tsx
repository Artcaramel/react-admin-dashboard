import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/common/Button";

import { getNoticeById, deleteNotice } from "@/localStorage/noticeStorage";
import { useConfirm } from "@/hooks/useConfirm";

export function NoticeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { confirm, ConfirmDialog } = useConfirm();

  const notice = useMemo(() => {
    if (!id) return null;
    return getNoticeById(Number(id)) ?? null;
  }, [id]);

  const handleDelete = async () => {
    if (!notice) return;

    const confirmCheck = await confirm({
      title: "삭제 확인",
      description: "정말 삭제하시겠습니까?",
      confirmText: "삭제",
      cancelText: "취소",
    });

    if (!confirmCheck) return;
    deleteNotice(notice.id);
    navigate("/common/notice");
  };

  if (!notice) return null;

  return (
    <div className="max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{notice.title}</CardTitle>
          <div className="text-sm text-muted-foreground flex gap-3">
            <span>작성자: {notice.writer}</span>
            <span>등록일: {notice.date}</span>
            <span>조회수: {notice.views}</span>
          </div>
        </CardHeader>

        <CardContent>
          <p className="whitespace-pre-line text-sm leading-relaxed">
            {notice.content}
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => navigate(-1)}>
          목록
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => navigate(`/common/notice/${notice.id}/edit`)}
          >
            수정
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
