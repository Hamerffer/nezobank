import type { ColumnDef } from "@tanstack/react-table"
import type { JSX } from "react"

export type Asset = {
  currency: string
  name: string
  icon: JSX.Element
  fiatBalance: string
  fiatValue: string
  cryptoBalance: string
  cryptoValue: string
  totalBalance: string
  totalValue: string
}

export const assetColumns: ColumnDef<Asset>[] = [
  {
    accessorKey: "currency",
    header: "Currency",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.icon}
        <span className="font-semibold">{row.original.currency}</span>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "fiatBalance",
    header: "Fiat Balance",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "fiatValue",
    header: "Fiat Value",
  },
  {
    accessorKey: "cryptoBalance",
    header: "Crypto Balance",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "cryptoValue",
    header: "Crypto Value",
  },
  {
    accessorKey: "totalBalance",
    header: "Total Balance",
  },
  {
    accessorKey: "totalValue",
    header: "Total Value",
  },
  {
    id: "action",
    header: "Action",
    cell: () => (
      <button className="text-emerald-variable hover:underline text-xs">View</button>
    ),
  },
]
