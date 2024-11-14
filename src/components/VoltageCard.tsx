import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import useLiveData from "@/hooks/useLiveData";

function VoltageCard({ batteryId }: { batteryId: number }) {
  const voltage = useLiveData(`battery/voltage/${batteryId}`);

  return (
    <Card className="h-[170px]">
      <CardHeader className="p-4">
        <CardDescription>Voltage</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center align-middle p-5">
        <h1>{voltage}</h1>
      </CardContent>
    </Card>
  );
}

export default VoltageCard;
