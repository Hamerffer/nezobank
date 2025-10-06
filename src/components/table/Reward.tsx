import type { ColumnDef } from "@tanstack/react-table"
import type { JSX } from "react"

export type Reward = {
  currency: string
  icon?: JSX.Element
  type: string
  rewardAmount: string
  totalAmount: string
}

export const rewardColumns: ColumnDef<Reward>[] = [
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
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => (
      <span className="text-sm font-medium">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "rewardAmount",
    header: "Reward Amount",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs text-green-600">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue() as string}</span>
    ),
  },
]
