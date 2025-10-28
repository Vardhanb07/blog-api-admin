import type React from "react";

export interface ProtectRoutePropTypes {
  token: string | null;
  children: React.ReactNode;
}

export interface LoginPropTypes {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface HomePropTypes {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface NavbarPropTypes {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export type stateType = {
  showPublished: boolean;
};

export type actionType = {
  type: "posts" | "drafts";
};

export interface SidebarPropTypes {
  dispatch: React.ActionDispatch<[action: actionType]>;
}

export interface BlogPreviewPropTypes {
  id: number;
  title: string;
  published: boolean;
}

export interface FormPropTypes {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  setPublished: React.Dispatch<React.SetStateAction<boolean>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  publishedValue?: boolean;
  textareaValue: string;
  titleValue?: string;
}
