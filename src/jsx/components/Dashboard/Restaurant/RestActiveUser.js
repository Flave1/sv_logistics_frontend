import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend : {
        display: false
    },
    title: {
        display: false,
        text: 'Bar Chart',
    },
  },
  responsive: true,
  interaction: {
    //mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      //stacked: true,
      display: false,
    },
    y: {
      //stacked: true,
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels: ["00:00", "", "", "", "", "", "", "", "", "23:59"],
    datasets: [
        {        
            label: "My First dataset",
            backgroundColor: "#fc8019",
            //strokeColor: "rgba(255,255,255,0.3)",
            pointColor: "rgba(0,0,0,0)",
            //pointStrokeColor: "rgba(58,223,174,1)",
            //pointHighlightFill: "rgba(58,223,174,1)",
            //pointHighlightStroke: "rgba(58,223,174,1)",
            borderCapStyle: 'round',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80]        
        },
    ],
};

export default function RestActiveUser() {
    return (
        <div id="activeUser">
            <Bar data={data} options={options} height={115}  />
        </div>
    );
}
