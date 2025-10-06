import type { UserData } from "./types"
import StatusBadge from "./Statusbadge"
import { ShieldCheck, ShieldX, IdCard, UserCheck } from "lucide-react"

interface Props {
  user: UserData
}

const VerificationCard = ({ user }: Props) => {
  return (
    <div className="w-full  p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
        <ShieldCheck className="w-5 h-5 text-emerald-500" />
        Verification Center
      </h2>

      {/* Row Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ID Verification */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 ">
          <h3 className="font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <IdCard className="w-5 h-5 text-blue-500" />
            ID Verification
          </h3>
          <div className="mt-2 flex items-center gap-3">
            <StatusBadge
              verified={user.verification.idVerified}
              rejected={false}
              label="ID"
            />
          </div>
          <button className="mt-4 w-fit button-variable text-white px-4 py-2 rounded-lg text-sm font-medium transition ">
            {user.verification.idVerified ? "Verified" : "Verify Now"}
          </button>
        </div>

        {/* KYC Verification */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h3 className="font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <UserCheck className="w-5 h-5 text-purple-500" />
            KYC Verification
          </h3>
          <div className="mt-2 flex items-center gap-3">
            <StatusBadge
              verified={user.verification.kycVerified}
              rejected={user.kycRejected}
              label="KYC"
            />
            {user.kycRejected && (
              <span className="flex items-center gap-1 text-red-500 text-xs font-medium">
                <ShieldX className="w-4 h-4" />
                {user.kycMessage}
              </span>
            )}
          </div>
          <button
            className={`mt-3 w-fit button-variable px-4 py-2 rounded-lg text-sm font-medium transition  ${
              user.verification.kycVerified
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {user.verification.kycVerified
              ? "KYC Verified"
              : user.kycRejected
              ? "Re-submit KYC"
              : "Verify Now"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerificationCard
