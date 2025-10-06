import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck, ShieldOff } from "lucide-react";

export const Route = createFileRoute("/dashboard/security")({
  component: RouteComponent,
});

function RouteComponent() {
  const google2FAEnabled = true;
  const phoneVerificationEnabled = false;
  const emailAuthEnabled = true;
  const withdrawalWhitelistEnabled = true;
  const activityLogEnabled = true; // assuming always enabled

  return (
    <div className="w-full h-96 p-4 md:p-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {/* Google 2FA */}
      <SecurityCard
        title="Google Two-Factor Authentication"
        description="Secure your account with Google 2FA to prevent password-based attacks."
        enabled={google2FAEnabled}
        enabledText="Your account is protected with Google Authenticator. You’ll need to enter a 6-digit code at login."
        disabledText="2FA adds an extra layer of security to your account. Enable it now to protect against password theft."
        actionTextEnabled="Disable 2FA"
        actionTextDisabled="Enable 2FA"
      />

      {/* Phone Verification */}
      <SecurityCard
        title="Phone Number Verification"
        description="Add phone-based verification for login alerts and password recovery."
        enabled={phoneVerificationEnabled}
        enabledText="Your phone number is verified. You'll receive alerts and can recover your account via SMS."
        disabledText="Secure your account with phone verification. Add your number to enable password recovery via SMS."
        actionTextEnabled="Remove Phone"
        actionTextDisabled="Verify Phone"
      />

      {/* Email Authentication */}
      <SecurityCard
        title="Email Authentication"
        description="Use your email for login confirmations and account alerts."
        enabled={emailAuthEnabled}
        enabledText="Your email is authenticated. You’ll receive login alerts and can recover your account via email."
        disabledText="Protect your account by enabling email-based authentication for login and recovery."
        actionTextEnabled="Remove Email Auth"
        actionTextDisabled="Enable Email Auth"
      />

      {/* Withdrawal Whitelist */}
      <SecurityCard
        title="Withdrawal Whitelist"
        description="Restrict withdrawals to pre-approved addresses to protect your funds."
        enabled={withdrawalWhitelistEnabled}
        enabledText="Your withdrawal whitelist is active. Only approved addresses can receive your funds."
        disabledText="Enable whitelist to restrict withdrawals only to trusted wallet addresses."
        actionTextEnabled="Disable Whitelist"
        actionTextDisabled="Enable Whitelist"
      />

      {/* Activity & Device Log */}
      <SecurityCard
        title="Activity & Device Log"
        description="View recent login activity and connected devices."
        enabled={activityLogEnabled}
        enabledText="You're actively monitoring account access. View logs to detect suspicious activity."
        disabledText="Enable activity tracking to monitor logins and connected devices."
        actionTextEnabled="View Activity Log"
        actionTextDisabled="Enable Logging"
      />
      <SecurityCard
  title="Change Password"
  description="Update your password to keep your account secure."
  enabled={true} // You can keep this true, since there's no "enable/disable" state for changing password
  enabledText="It's recommended to change your password regularly to protect your account."
  disabledText="For security reasons, set a strong and unique password for your account."
  actionTextEnabled="Change Password"
  actionTextDisabled="Change Password"
/>

    </div>
  );
}

function SecurityCard({
  title,
  description,
  enabled,
  enabledText,
  disabledText,
  actionTextEnabled,
  actionTextDisabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
  enabledText: string;
  disabledText: string;
  actionTextEnabled: string;
  actionTextDisabled: string;
}) {
  return (
    <Card className="flex flex-col justify-between max-h-96 shadow-md rounded-2xl border ">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
        {enabled ? (
          <span className="flex items-center gap-1 text-green-600 font-medium text-sm">
            <ShieldCheck className="w-4 h-4" /> Enabled
          </span>
        ) : (
          <span className="flex items-center gap-1 text-red-600 font-medium text-sm">
            <ShieldOff className="w-4 h-4" /> Disabled
          </span>
        )}
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm ">
          {enabled ? enabledText : disabledText}
        </p>
      </CardContent>

      <CardFooter>
        <button
          className={`w-fit py-2 px-4 rounded-full font-semibold transition ${
            enabled
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "button-variable text-white"
          }`}
        >
          {enabled ? actionTextEnabled : actionTextDisabled}
        </button>
      </CardFooter>
    </Card>
  );
}
