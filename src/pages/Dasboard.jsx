import React from "react";
import ColumnChart from "../components/Charts/ColumnChart";
import { dummyData } from "../utils/date";
import PieChart from "../components/Charts/PieChart";

function Dashboard() {
  return (
    <div className="flex max-w-screen-xl gap-8 flex-wrap">
      <ColumnChart
        data={dummyData}
        title="Usuários cadastrados nos últimos 7 dias"
      />
      <ColumnChart data={dummyData} />
      <PieChart />
    </div>
  );
}

export default Dashboard;
