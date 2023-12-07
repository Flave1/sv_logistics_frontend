import React from "react";
import ReactApexChart from "react-apexcharts";
//import ApexCharts from 'apexcharts';
//import { Link } from "react-router-dom";

class PopularPieChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [45, 10, 80, ],
			options: {
				chart: {
				//id: 'assetDistribution',
					type: "donut",
					offsetY: 0,
				    height:250,
					
				},
				
              dataLabels: {
                  enabled: false
              },
              legend: {
      
                  show:false
              },
              stroke: {
                  
                  width:0,
              },
              fill: {
                  colors: ['var(--primary)', '#1FBF75' ,'#33A9FF'],
              },
              responsive: [{
                  breakpoint: 601,
                  options: {
                    chart: {
                      width: 200,
                      height: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                },
                {
                breakpoint:361,
                options: {
                  chart: {
                    width: 270,
                    height: 200
                    
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
                
              }]
                    
			}, 
		};
	}

  
	render() {
        return (
            <div id="piechart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250}  />
            </div>
        );
	}
}

export default PopularPieChart;