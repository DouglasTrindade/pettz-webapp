"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { LoginFields } from "./Fields";

export const Login = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="text-center">
        <CardTitle className="font-bold text-3xl">
          4Pettz<span className="text-primary">.</span>
        </CardTitle>
        <CardDescription>Siga para a 4Pettz.</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginFields />
      </CardContent>
    </Card>
  );
};
