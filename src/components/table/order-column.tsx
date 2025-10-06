import type { ColumnDef } from "@tanstack/react-table";

export type Order = {
  sno: number;
  pairName: string;
  refId: string;
  orderType: "Buy" | "Sell";
  quantity: number;
  price: number;
  totalAmount: number;
  filledAmount: number;
  tdsPercent: number;
  feePercent: number;
  receivedToken: string;
  dateTime: string;
  status: "Pending" | "Completed" | "Failed";
};

export const orderColumns: ColumnDef<Order>[] = [
  {
    header: "S.no",
    id: "sno",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "pairName",
    header: "Pair Name",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "refId",
    header: "Ref ID",
  },
  {
    accessorKey: "orderType",
    header: "Order Type",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
  },
  {
    accessorKey: "filledAmount",
    header: "Filled Amount",
  },
  {
    accessorKey: "tdsPercent",
    header: "TDS %",
  },
  {
    accessorKey: "feePercent",
    header: "Fee %",
  },
  {
    accessorKey: "receivedToken",
    header: "Received Token",
  },
  {
    accessorKey: "dateTime",
    header: "Date & Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as Order["status"];
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
    id: "action",
    header: "Action",
    cell: () => (
      <button className="text-emerald-variable hover:underline text-xs">View</button>
    ),
  },
];
