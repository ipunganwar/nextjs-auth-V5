"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

type Props = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};
export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: Props) => {
  return <Card className="w-[400px] shadow-md">{children}</Card>;
};
