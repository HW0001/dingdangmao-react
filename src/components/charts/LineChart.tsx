import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
var echarts = require("echarts");

const LineChartWrapping = styled.div`
  height: 300px;
  width: 95%;
`;

type Props = {
  xaxis: string[];
  title: string;
  data: number[];
};

const LineChart: React.FC<Props> = (props) => {
  const chart = useRef(null);
  const [option] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["近七日支出", "近七日收入"],
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
        name: props.title,
        type: "line",
        stack: "总量",
        data: props.data,
        itemStyle: {
          borderWidth: 10,
        },
      },
    ],
  });

  useEffect(() => {
    echarts.init(chart.current).setOption(option);
  });

  useEffect(() => {
    echarts.init(chart.current).setOption({
      xAxis: {
        data: props.xaxis,
      },
      series: [
        {
          name: props.title,
          data: props.data,
        },
      ],
    });
  }, [props]);

  return <LineChartWrapping ref={chart}></LineChartWrapping>;
};

export default LineChart;
