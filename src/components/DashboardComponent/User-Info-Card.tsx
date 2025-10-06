import { useEffect, useState } from "react";
import UserHeader from "./user/userheader";
import AssetsCard from "./user/Assetscard";
import VerificationCard from "./user/Verificationcard";
import SecurityCard from "./user/Securitycard";
import LoadingSpinner from "./user/Loadingspinner";
import ErrorCard from "./user/Errorcard";
import type { UserData } from "./user/types";

const UserDashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // api call
        const mockData: UserData = {
          username: "JaiQA1524",
          email: "Jai0525525@gmail.com",
          referralCode: "tgk0056H",
          referralLink: "https://www.example.com",
          lastLogin: "5/09/2023, 15:58:29",
          status: "Active",
          assets: { mainBalance: 0, net: 0 },
          verification: {
            idVerified: false,
            bankLinked: false,
            kycVerified: false,
            bankVerified: false,
            twoFactorEnabled: false,
          },
          kycRejected: true,
          kycMessage: "Your KYC was rejected. Please resubmit documents.",
          bankMessage: "Link your bank account for deposits & withdrawals.",
          twoFAMessage: "Enable 2FA for extra account security.",
        };

        setTimeout(() => {
          setUserData(mockData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to fetch user data" + err);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorCard message={error} />;

  return (
    <div className="p-4 space-y-6 h-full w-full m-5">
      {userData && (
        <>
          <UserHeader user={userData} />
          <AssetsCard assets={userData.assets} />
          <VerificationCard user={userData} />
          <section className="mt-7">
            <SecurityCard user={userData} />
          </section>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
