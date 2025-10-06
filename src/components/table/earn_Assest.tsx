import type { ColumnDef } from "@tanstack/react-table"
import type { JSX } from "react"

export type StakingPlan = {
  coin: string
  icon?: JSX.Element
  totalAmount: string
  apy: string
  totalHoldings: string
  estimatedInterest: string
}

export const earn_asset: ColumnDef<StakingPlan>[] = [
  {
    accessorKey: "coin",
    header: "Coin",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.icon}
        <span className="font-semibold">{row.original.coin}</span>
      </div>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "apy",
    header: "APY (%)",
    cell: ({ getValue }) => (
      <span className="text-green-600 font-medium">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "totalHoldings",
    header: "Total Holdings",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "estimatedInterest",
    header: "Estimated Interest",
    cell: ({ getValue }) => (
      <span className="text-emerald-variable font-medium">{getValue() as string}</span>
    ),
  },
  {
    id: "action",
    header: "View Plan",
    cell: () => (
      <button className="text-sm px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
        View
      </button>
    ),
  },
]
