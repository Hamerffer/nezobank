import type { ColumnDef } from "@tanstack/react-table"
import type { JSX } from "react"

export type OfferReward = {
  currency: string
  icon?: JSX.Element
  offerType: string
  rewardAmount: string
  totalAmount: string
  dateTime: string
}

export const offerRewardColumns: ColumnDef<OfferReward>[] = [
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
    accessorKey: "offerType",
    header: "Offer Type",
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
  {
    accessorKey: "dateTime",
    header: "Date/Time",
    cell: ({ getValue }) => (
      <span className="text-xs text-muted-foreground">{getValue() as string}</span>
    ),
  },
]
