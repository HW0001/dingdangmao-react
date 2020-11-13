import React, { useEffect, useRef } from "react";
import styled from "styled-components";
var echarts = require("echarts");

const LineChartWrapping = styled.div`
  height: 300px;
  width: 95%;
`;

type Props = {
  xaxis: string[];
  title: 0 | 1;
  data: number[];
};

const title = ["近七日支出", "近七日收入"];

const LineChart: React.FC<Props> = (props) => {
  const chart = useRef(null);
  const options = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: title,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xaxis,
    },
    yAxis: {
      type: "value",
    },

    series: [
      {
        name: title[props.title],
        type: "line",
        stack: "总量",
        data: props.data,
        itemStyle: {
          borderWidth: 10,
        },
      },
    ],
  };

  useEffect(() => {
    echarts.init(chart.current).setOption(options);
  }, []);
  return <LineChartWrapping ref={chart}></LineChartWrapping>;
};

export default LineChart;
