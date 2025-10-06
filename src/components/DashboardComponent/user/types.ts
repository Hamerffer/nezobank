export interface Verification {
  idVerified: boolean
  bankLinked: boolean
  kycVerified: boolean
  bankVerified: boolean
  twoFactorEnabled: boolean
}

export interface Assets {
  mainBalance: number
  net: number
}

export interface UserData {
  username: string
  email: string
  referralCode: string
  referralLink: string
  lastLogin: string
  status: string
  assets: Assets
  verification: Verification
  kycRejected: boolean
  kycMessage: string
  bankMessage: string
  twoFAMessage: string
}
