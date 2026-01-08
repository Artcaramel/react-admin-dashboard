import { type ColumnDef } from "@tanstack/react-table";
import { DataGrid } from "@/components/ui/common/DataGrid/DataGrid";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const initialData: Payment[] = [
  {
    id: "1",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "2",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "3",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "4",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "5",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export function DataGridView() {
  const [data, setData] = useState<Payment[]>(initialData);

  const handleEmailChange = (id: string, newEmail: string) => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, email: newEmail } : row))
    );
  };

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => {
        const payment = row.original;
        return (
          <Input
            value={payment.email}
            onChange={(e) => handleEmailChange(payment.id, e.target.value)}
            className="h-8 w-full"
          />
        );
      },
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
  ];

  return (
    <div className="p-10">
      <h1 className="mb-5 text-2xl font-bold">DataGrid</h1>
      <DataGrid columns={columns} data={data} />
    </div>
  );
}
