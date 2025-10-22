import type React from "react";

export interface ProtectRoutePropTypes {
  token: string | null;
  children: React.ReactNode;
}

export interface LoginPropTypes {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

