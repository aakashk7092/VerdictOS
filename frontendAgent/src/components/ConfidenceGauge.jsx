import { PieChart, Pie, Cell } from "recharts";

const ConfidenceGauge = ({ value = 0 }) => {
  const data = [
    { name: "confidence", value },
    { name: "remaining", value: 100 - value },
  ];

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 text-center">
      <h3 className="mb-4 text-white font-semibold">
        Confidence Level
      </h3>

      <PieChart width={200} height={200}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          <Cell fill="#3b82f6" />
          <Cell fill="#27272a" />
        </Pie>
      </PieChart>

      <p className="text-2xl font-bold text-blue-400">
        {value}%
      </p>
    </div>
  );
};

export default ConfidenceGauge;