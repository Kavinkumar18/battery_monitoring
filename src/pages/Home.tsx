import CurrentCard from "@/components/CurrentCard";
import TemperatureCard from "@/components/TemperatureCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VoltageCard from "@/components/VoltageCard";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 py-5">
        <Card className="h-[170px]">
          <CardHeader className="p-4">
            <CardDescription>Voltage</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center align-middle p-5">
            <h1>12 V</h1>
          </CardContent>
        </Card>
        <TemperatureCard />
        <CurrentCard />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        {Array.from([1, 2, 3, 4]).map((val, index) => {
          return <VoltageCard batteryId={val} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Home;
