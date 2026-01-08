import { DataTable } from "@/components/ui/common/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

type TestUser = {
  no: number;
  name: string;
  email: string;
};

const testData: TestUser[] = [
  {
    no: 1,
    name: "홍길동",
    email: "hong@test.com",
  },
  {
    no: 2,
    name: "임꺽정",
    email: "Eim@test.com",
  },
];

const testColumns: ColumnDef<TestUser>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.no}</span>
    ),
  },
  {
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "email",
    header: "이메일",
  },
];

export function TableView() {
  const [data, setData] = useState<typeof testData>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 일단 비동기처럼 처리
    const timer = setTimeout(() => {
      setData(testData);
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <DataTable columns={testColumns} data={data} loading={isLoading} />
    </div>
  );
}
