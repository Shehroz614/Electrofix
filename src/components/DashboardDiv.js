import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-apexcharts";

function DashboardDiv() {
  var data = {
    options: {
      chart: {
        id: "basic-bar",
        type: "area",
        height: "100px",
        width: "700px",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  var data2 = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <div className="DashboardDiv">
      <div className="CardsDiv">
        <div className="orders">
          <h3>Orders</h3>
          <div style={{ display: "flex", color: "black" }}>
            <div className="CircularBar">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "rgba(146, 0, 0, 0.466)",
                  textColor: "rgba(146, 0, 0, 0.466)",
                })}
                value={65}
                text={"65%"}
              />
              ;
            </div>
            <div style={{ paddingRight: "2px" }}>
              <h5>Total orders: 65</h5>
              <h5>Completed orders: 45</h5>
              <h5>Canceled orders: 20</h5>
            </div>
          </div>
        </div>
        <div className="requests">
          <h3>Requests</h3>
          <div style={{ display: "flex", color: "black" }}>
            <div className="CircularBar">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "rgba(190, 187, 0, 0.466)",
                  textColor: "rgba(190, 187, 0, 0.466)",
                })}
                value={85}
                text={"85%"}
              />
              ;
            </div>
            <div style={{ paddingRight: "2px" }}>
              <h5>Total orders: 65</h5>
              <h5>Completed orders: 45</h5>
              <h5>Canceled orders: 20</h5>
            </div>
          </div>
        </div>
        <div className="ratings">
          <h3>Ratings</h3>
          <div style={{ display: "flex", color: "black" }}>
            <div className="CircularBar">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "rgba(0, 102, 116, 0.452)",
                  textColor: "rgba(0, 102, 116, 0.452)",
                })}
                value={95}
                text={"95%"}
              />
              ;
            </div>
            <div style={{ paddingRight: "2px" }}>
              <h5>Total orders: 65</h5>
              <h5>Completed orders: 45</h5>
              <h5>Canceled orders: 20</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="chartDiv">
        <div>
          <Chart
            options={data.options}
            series={data.series}
            type="area"
            width="100%"
            height="300px"
          />
        </div>
        <div>
          <Chart
            options={data2.options}
            series={data2.series}
            type="area"
            width="100%"
            height="300px"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardDiv;
