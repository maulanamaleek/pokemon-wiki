"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { FC } from "react";

interface IProviderProps {
  children: React.ReactNode;
  session?: Session;
}

const Provider: FC<IProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;