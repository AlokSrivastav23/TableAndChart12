import Table from "./components/Table";
import { Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import { useNavigate } from "react-router-dom";
// import { Line } from "react-chartjs-2";
export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="button">
        <button
          onClick={(e) => {
            navigate("/");
          }}
        >
          Table
        </button>
        <button
          onClick={(e) => {
            navigate("/Chart");
          }}
        >
          Chart
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Table />}></Route>
      </Routes>
      <Routes>
        <Route path="/Chart" element={<Chart />}></Route>
      </Routes>
    </div>
  );
}
