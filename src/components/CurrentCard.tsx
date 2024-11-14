import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import useLiveData from "@/hooks/useLiveData";

function CurrentCard() {
  const current = useLiveData(`battery/current/`);

  return (
    <Card className="h-[170px]">
      <CardHeader className="p-4">
        <CardDescription>Current</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center align-middle p-5">
        <h1>{current}</h1>
      </CardContent>
    </Card>
  );
}

export default CurrentCard;
