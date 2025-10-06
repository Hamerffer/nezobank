import type { UserData } from "./types";
import StatusBadge from "./Statusbadge";

interface Props {
  user: UserData;
}

const SecurityCard = ({ user }: Props) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Security</h2>

      <div className="flex items-center mb-2">
        <StatusBadge
          verified={user.verification.twoFactorEnabled}
          rejected={false}
          label="2FA"
        />
        <span className="ml-2 ">Two Factor Authentication</span>
      </div>

      <p className="paragraph-variable text-sm mb-2">{user.twoFAMessage}</p>
      <button className="button-variable  px-3 py-1 rounded text-sm">
        Enable Now
      </button>
    </div>
  );
};

export default SecurityCard;
