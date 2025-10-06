import type { UserData } from "./types"

interface Props {
  user: UserData
}

const UserHeader = ({ user }: Props) => {
  return (
    <div className="dark:bg-gray-900 rounded-lg p-5 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Username & Email */}
        <div>
          <h1 className="text-2xl font-bold mb-1">{user.username}</h1>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>

        {/* Referral Code */}
        <div>
          <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-1">
            Referral Code
          </h3>
          <p className="font-medium">{user.referralCode}</p>
        </div>

        {/* Referral Link */}
        <div>
          <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-1">
            Referral Link
          </h3>
          <p className="text-blue-500 truncate">{user.referralLink}</p>
        </div>

        {/* Last Login */}
        <div>
          <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-1">
            Last Login
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{user.lastLogin}</p>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                user.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHeader
