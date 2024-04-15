import React from "react";
import ReactApexChart from "react-apexcharts";
function PieChart({ title = "Requisições na API", data }) {
  const chartData = data;
  return (
    <div className="dark:text-slate-400 text-slate-900 flex flex-1 flex-col justify-center items-center p-8 py-8 gap-8 min-h-28 w-fit bg-gray-100 dark:bg-slate-800 rounded-2xl">
      <div className="flex flex-col">
        <h2 className="text-xl dark:text-gray-50 font-bold">{title}</h2>
      </div>

      <ReactApexChart
        options={{
          plotOptions: {
            bar: {
              distributed: true,
            },
          },
          chart: {
            toolbar: { show: false },
            foreColor: "#64748b",
            type: "donut",
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: false,
            curve: "smooth",
          },
          xaxis: {
            type: "category",
          },
          subtitle: {
            style: {
              color: "#f8fafc",
            },
          },
        }}
        series={[44, 55, 41, 17, 15]}
        type="donut"
      />
    </div>
  );
}

export default PieChart;
