// fiatCryptoColumns.ts

// fiatCryptoColumns.ts
import type { ColumnDef } from "@tanstack/react-table";

export type FiatCrypto = {
  sno: number;
  currencySymbol: string;
  transferedAmount: number;
  Transferfrom: string;
  dateTime: string;
};

export const fiatCryptoColumns: ColumnDef<FiatCrypto>[] = [
  {
    header: "S.no",
    id: "sno",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "currencySymbol",
    header: "Currency",
  },
  {
    accessorKey: "transferedAmount",
    header: "Transferred Amount",
  },
  {
    accessorKey: "Transferfrom",
    header: "Transfer From",
  },
  {
    accessorKey: "dateTime",
    header: "Date & Time",
  },
  {
    id: "action",
    header: "Action",
    cell: () => (
      <button className="text-emerald-variable hover:underline text-xs">View</button>
    ),
  },
];
