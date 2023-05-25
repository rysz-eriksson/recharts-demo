import "./styles.css";
import { distanceData } from "./data/distanceData";
import { rankData } from "./data/rankData";

import LineProgressChart from "./components/lineProgressChart";
import AreaProgressChart from "./components/areaProgressChart";
import LineRankChart from "./components/lineRankChart";

export default function App() {
  return (
    <>
      <h2>Line progress chart</h2>
      <LineProgressChart data={distanceData} />
      <h2>Area progress chart</h2>
      <AreaProgressChart data={distanceData} />
      <h2>Line rank chart</h2>
      <LineRankChart data={rankData} />
    </>
  );
}
