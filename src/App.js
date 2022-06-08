import { Line, LineChart, XAxis, YAxis } from "recharts";

export default function App() {
  return (
    <div>
      <ReChartLine />
    </div>
  );
}

const line_data = [{ date: "2021-01-01", value: 1 }];

function ReChartLine() {
  return (
    <div>
      <LineChart data={line_data} height={400} width={500}>
        <XAxis dataKey="date" />
        <YAxis />
        <Line dataKey="value" />
      </LineChart>
    </div>
  );
}
