import React from "react";
import ReactApexChart from "react-apexcharts";

class PerformanceChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [70],
			options: {
				chart: {
				//id: 'assetDistribution',
					type: "radialBar",
					offsetY: 0,
				    height:160,
					sparkline: {
                        enabled: true
                    }
				},
				plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#DBDBDB",
                            strokeWidth: '100%',
                            margin: 2,
                        },
                        hollow: {
                            margin: 50,
                            size: '+70%',
                            //background: 'white',
                            //position: 'front',
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -10,
                                fontSize: '18px',
                                color: '#33A9FF',
                                fontWeight: 600,
                            }
                        }                   
                    },
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    type: 'gradient',
                    colors: '#33A9FF',
                    gradient: {
                        shade: 'white',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                labels: ['Average Results'],
                responsive: [{
                    breakpoint: 1750,
                    options: {
                        chart: {
                            height: 160
                        },
                    }
                    
                    
                }],
                    
			}, 
		};
	}

  
	render() {
        return (
            <div id="redial">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={160}  />
            </div>
        );
	}
}

export default PerformanceChart;