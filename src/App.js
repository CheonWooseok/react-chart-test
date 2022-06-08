import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function App() {
  return (
    <div align="center">
      <RechartBar />
      <RechartLine />
      <RechartPie />
      <RechartRadar />
    </div>
  );
}

const data1 = [
  { date: "2021-01-01", pv: 69, uv: 30 },
  { date: "2021-01-02", pv: 75, uv: 54 },
  { date: "2021-01-03", pv: 88, uv: 45 },
  { date: "2021-01-04", pv: 120, uv: 34 },
  { date: "2021-01-05", pv: 70, uv: 50 },
  { date: "2021-01-06", pv: 67, uv: 79 },
  { date: "2021-01-07", pv: 80, uv: 47 },
  { date: "2021-01-08", pv: 70, uv: 80 },
  { date: "2021-01-09", pv: 78, uv: 74 },
  { date: "2021-01-10", pv: 89, uv: 89 },
  { date: "2021-01-11", pv: 99, uv: 103 },
  { date: "2021-01-12", pv: 103, uv: 57 },
];

function RechartLine() {
  return (
    <div>
      <LineChart data={data1} width={730} height={250}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <XAxis dataKey="date" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv" // dataKey에 Y축 값을 넣는다.
          stroke="#8884d8"
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

function RechartBar() {
  return (
    <BarChart width={730} height={250} data={data1}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}

const pie_data = [
  { name: "A", value: 10, value2: 24 },
  { name: "B", value: 24, value2: 20 },
  { name: "C", value: 29, value2: 12 },
  { name: "D", value: 33, value2: 9 },
  { name: "E", value: 9, value2: 24 },
];

function RechartPie() {
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={pie_data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Pie
        data={pie_data}
        dataKey="value2 "
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
}

const radar_data = [
  { subject: "Math", A: 54, B: 86 },
  { subject: "Korean", A: 89, B: 80 },
  { subject: "Physics", A: 67, B: 94 },
  { subject: "History", A: 83, B: 78 },
  { subject: "English", A: 90, B: 60 },
  { subject: "Geography", A: 76, B: 82 },
];

function RechartRadar() {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={radar_data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Lily"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
