import { Line } from "react-chartjs-2";

function Chart() {
  const data = {
    labels: [" ", "2004", "2008", "2012", "2016", "2020"],
    datasets: [
      {
        label: "Medals Won by India in Olymics",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "blue",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 9,
        pointRadius: 3,
        pointHitRadius: 5,
        data: [, 1, 3, 6, 2, 7]
      }
    ]
  };

  return <Line data={data} />;
}
export default Chart;
