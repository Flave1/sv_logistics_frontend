import React from "react";
import ReactApexChart from "react-apexcharts";
//import ApexCharts from 'apexcharts';
//import { Link } from "react-router-dom";

class PositiveReviewChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: 'Running',
					data: [50, 60, 90,50, 60],
				}, 
				{
                    name: 'Cycling',
                    data: [80, 40, 55,80, 40]
				}, 
            ],
			options: {
				chart: {
				//id: 'assetDistribution',
					type: "bar",
					height: 200,
					toolbar: {
						show: false,
					},
				},
				plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '80%',
                        endingShape: "rounded",
                        borderRadius: 5,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                      filter: 'none',
                    }
                },
                colors:['var(--primary)', '#EB5757'],
                
                markers: {
                    shape: "circle",
                }, 
                legend: {
                    show: false,
                    fontSize: '12px',
                    labels: {
                        colors: '#000000',
                        
                        },
                    markers: {
                    width: 18,
                    height: 18,
                    strokeWidth: 10,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 12,	
                    }
                },
                stroke: {
                    show: true,
                    width: 4,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ['transparent']
                },
                grid: {
                    //borderColor: '#fff',
                    show:false
                },
                xaxis: {
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','sun'],
                    labels: {
                        show: true,
                        style: {
                            colors: '#A5AAB4',
                            fontSize: '14px',
                            fontWeight: '500',
                            fontFamily: 'poppins',
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    crosshairs: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }, 			
                },
                yaxis: {
                    labels: {
                    show: false,
                        offsetX:-16,
                       style: {
                          colors: '#000000',
                          fontSize: '13px',
                           fontFamily: 'poppins',
                          fontWeight: 100,
                          cssClass: 'apexcharts-xaxis-label',
                      },
                  },
                },
                fill: {
                    type: 'solid',
                    gradient: {
                        show: false,
                        shade: 'white',
                        type: "vertical",
                        shadeIntensity: 0.2,
                        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 50],
                        colorStops: []
                    }
                }, 
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return "$ " + val + " thousands"
                    }
                  }
                },
                    
			}, 
		};
	}

  
	render() {
        return (
            <div id="chartBar3">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={200}  />
            </div>
        );
	}
}

export default PositiveReviewChart;