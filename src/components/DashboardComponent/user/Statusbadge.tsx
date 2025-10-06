interface Props {
  verified: boolean
  rejected?: boolean
  label: string
}

const StatusBadge = ({ verified, rejected, label }: Props) => {
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-semibold ${
        verified
          ? "bg-green-100 text-green-700"
          : rejected
          ? "bg-red-100 text-red-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {verified ? `${label} Verified` : rejected ? `${label} Rejected` : `${label} Pending`}
    </span>
  )
}

export default StatusBadge
