import type { ColumnDef } from "@tanstack/react-table"

export type StakePlan = {
  stakeType: string
  totalAmount: string
  apy: string
  totalHoldings: string
  estimatedInterest: string
}

export const earn_product: ColumnDef<StakePlan>[] = [
  {
    accessorKey: "stakeType",
    header: "Stake Type",
    cell: ({ getValue }) => (
      <span className="font-semibold">{getValue() as string}</span>
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
      <button className="text-sm px-3 py-1 rounded-md text-emerald-variable ">
        View
      </button>
    ),
  },
]
