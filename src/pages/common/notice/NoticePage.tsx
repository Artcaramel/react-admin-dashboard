import { Button } from "@/components/ui/common/Button";
import { DataTable } from "@/components/ui/common/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Notice } from "./types/notice";
import { getNotices } from "@/localStorage/noticeStorage";
import { Pagination } from "@/components/ui/common/Pagination";

const pageSize = 5;

const noticeColumns: ColumnDef<Notice>[] = [
  {
    accessorKey: "id",
    header: "번호",
  },
  {
    accessorKey: "title",
    header: "제목",
  },
  {
    accessorKey: "writer",
    header: "작성자",
  },
  {
    accessorKey: "date",
    header: "등록일",
  },
  {
    accessorKey: "views",
    header: "조회수",
  },
];

export function NoticePage() {
  const navigate = useNavigate();
  const [data] = useState<Notice[]>(() => getNotices());

  const [page, setPage] = useState(1);

  const pagedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page]);

  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <div>
          <h3 className="text-xl font-semibold">공지사항</h3>
          <p className="text-sm text-muted-foreground">
            서비스 관련 주요 공지사항을 확인하세요.
          </p>
        </div>

        <Button onClick={() => navigate("/common/notice/new")}>
          공지 등록
        </Button>
      </div>

      <DataTable
        columns={noticeColumns}
        data={pagedData}
        columnWidths={[10, 60, 10, 10, 10]}
        onRowClick={(row) => navigate(`/common/notice/${row.id}`)}
      />
      <div className="flex justify-center mt-6">
        <Pagination
          page={page}
          total={data.length}
          pageSize={pageSize}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
