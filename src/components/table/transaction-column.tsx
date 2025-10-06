import type { ColumnDef } from "@tanstack/react-table";

export type Transaction = {
  id: string;
  currency: string;
  type: string;
  requestAmt: number;
  fee: number;
  receivedAmt: number;
  status: "Pending" | "Completed" | "Failed";
  date: string;
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    header: "S.no",
    id: "sno",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "id",
    header: "Txn ID",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "requestAmt",
    header: "Request Amt",
  },
  {
    accessorKey: "fee",
    header: "Fee",
  },
  {
    accessorKey: "receivedAmt",
    header: "Received Amt",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as Transaction["status"];
      const color =
        status === "Completed"
          ? "text-green-600"
          : status === "Pending"
          ? "text-yellow-600"
          : "text-red-600";

      return <span className={`font-medium ${color}`}>{status}</span>;
    },
  },
  {
    accessorKey: "date",
    header: "Date/Time",
  },
  {
    id: "action",
    header: "Action",
    cell: () => (
      <button className="text-emerald-variable hover:underline text-xs">View</button>
    ),
  },
];
