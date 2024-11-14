// ChartComponent.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useTimelineData from "@/hooks/useTimelineData";
import { useLocation, useParams } from "react-router-dom";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Options for the chart

type locationState = {
  dbPath: string;
  label: string;
  title: string;
};

const ChartComponent = () => {
  const location = useLocation();

  const state = location.state as locationState;

  const dbData = useTimelineData(state.dbPath);

  const data = {
    labels: dbData ? Object.keys(dbData) : [],
    datasets: [
      {
        label: state.label,
        data: dbData ? Object.values(dbData) : [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: state.title,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}°C`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "80%", height: "90vh", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
