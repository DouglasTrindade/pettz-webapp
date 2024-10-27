"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RegisterFields } from "./Fields";

export const Register = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="text-center">
        <CardTitle className="font-bold text-3xl">
          4Pettz<span className="text-primary">.</span>
        </CardTitle>
        <CardDescription>Cadastre-se para continuar</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterFields />
      </CardContent>
    </Card>
  );
};
