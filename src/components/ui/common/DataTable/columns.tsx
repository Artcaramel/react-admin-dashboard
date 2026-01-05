import type { ColumnDef } from "@tanstack/react-table";

export type DataTableColumn<T> = ColumnDef<T> & {
  headerLabel?: string;
};
