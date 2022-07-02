import { Fragment } from "react";
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
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "blue",
        pointHoverBorderWidth: 9,
        pointRadius: 3,
        pointHitRadius: 5,
        data: [, 1, 3, 6, 2, 7]
      }
    ]
  };
  const lineOptions = {
    onClick: (e, element) => {
      if (element.length > 0) {
        var ind = element[0]._index;
        alert(ind);
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            userCallback(value) {
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);
              value = value.join("");

              return `${value}`;
            }
          }
        }
      ]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };
  return (
    <>
      <div className="Chart">
        <div className="aa">
          <span>Medals Wons</span>
        </div>
        <div>
          <Line data={data} options={lineOptions} />
        </div>
      </div>

      <span className="sp">Years</span>
    </>
  );
}
export default Chart;
