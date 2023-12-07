import React from "react";
import ReactApexChart from "react-apexcharts";
//import ApexCharts from 'apexcharts';
import { Link } from "react-router-dom";

class StatisticChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: '',
                    data: [60, 70, 80, 50, 60, 50, 90]
				}, 
				{
				  name: '',
				  data: [40, 50, 40, 60, 90, 70, 90]
				}, 
            ],
			options: {
				chart: {
					type: "area",
					height: 370,
                    group: 'social',
					toolbar: {
						show: false,
					},
				},
                zoom: {
                    enabled: false
                },
				// plotOptions: {
                //     bar: {
                //         horizontal: false,
                //         endingShape:'rounded',
                //         columnWidth: '35%',
                //         borderRadius: 2,                    
                //     },
                // },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [3, 3, 3],
                    colors:['#EB5757','var(--primary)'],
                    curve: 'straight'
                },
                legend: {
                    show:false,
                  tooltipHoverFormatter: function(val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                  },
                  markers: {
                    fillColors:['#fff','#fff'],
                    width: 16,
                    height: 16,
                    strokeWidth: 0,
                    radius: 16
                  }
                },
                markers: {
                  size: [8,8],
                  strokeWidth: [4,4],
                  strokeColors: ['#EB5757','var(--primary'],
                  border:2,
                  radius: 2,
                  colors:['#fff','#fff','#fff'],
                  hover: {
                    size: 10,
                  }
                },
                xaxis: {
                  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  labels: {
                   style: {
                      colors: '#3E4954',
                      fontSize: '14px',
                       fontFamily: 'Poppins',
                      fontWeight: 100,
                      
                    },
                  },
                  axisBorder:{
                      show: false,
                  }
                },
                yaxis: {
                    labels: {
                        minWidth: 20,
                        offsetX:-16,
                        style: {
                          colors: '#3E4954',
                          fontSize: '14px',
                           fontFamily: 'Poppins',
                          fontWeight: 100,
                          
                        },
                    },
                },
                fill: {
                    colors:['#fff','#FF9432'],
                    type:'gradient',
                    opacity: 1,
                    gradient: {
                        shade:'light',
                        shadeIntensity: 1,
                        colorStops: [ 
                          [
                            {
                              offset: 0,
                              color: '#fff',
                              opacity: 0
                            },
                            {
                              offset: 0,
                              color: '#fff',
                              opacity: 0
                            },
                            {
                              offset: 100,
                              color: '#fff',
                              opacity: 0
                            }
                          ],
                          [
                            {
                              offset: 0,
                              color: 'var(--primary)',
                              opacity: 0
                            },
                            {
                              offset: 50,
                              color: 'var(--primary)',
                              opacity: 0
                            },
                            {
                              offset: 100,
                              color: '#fff',
                              opacity: 0
                            }
                          ]
                        ]
        
                  },
                },
                colors:['#EB5757','#FF9432'],
                grid: {
                  borderColor: '#f1f1f1',
                  xaxis: {
                    lines: {
                      show: true
                    }
                  },
                  yaxis: {
                    lines: {
                      show: false
                    }
                  },
                },
                 responsive: [{
                    breakpoint: 1602,
                    options: {
                        markers: {
                             size: [6,6,4],
                             hover: {
                                size: 7,
                              }
                        },chart: {
                        height: 370,
                    },	
                    },
                    
                }]
                    
			}, 
		};
	}

  
	render() {
        return (
            <div >
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={370}  />
            </div>
        );
	}
}

export default StatisticChart;