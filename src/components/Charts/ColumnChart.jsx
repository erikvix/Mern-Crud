import React from "react";
import ReactApexChart from "react-apexcharts";
import { dummyData } from "../../utils/date";

function ColumnChart({ title = "Usuários ativos nos últimos 30 dias", data }) {
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
            type: "bar",
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: false,
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
        series={[
          {
            data: chartData,
          },
        ]}
        type="bar"
      />
    </div>
  );
}

export default ColumnChart;
