import React from "react";
import ReactApexChart from "react-apexcharts";
//import ApexCharts from 'apexcharts';
//import { Link } from "react-router-dom";

class OrderAreaChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: '',
                    data: [40, 55, 50, 40, 75, 80, 40, 55, 50, 40, 75, 80]
				}, 
				{
				  name: '',
				  data: [75, 25, 60, 25, 15, 70,75, 25, 60, 25, 15, 70]
				}, 
            ],
			options: {
				chart: {
					type: "area",
					height: 300,
                    group: 'social',
					toolbar: {
						show: false,
					},
				},
                zoom: {
                    enabled: false
                },
				plotOptions: {
                    bar: {
                        horizontal: false,
                        endingShape:'rounded',
                        columnWidth: '35%',
                        borderRadius: 2,                    
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [3, 3, 3],
                    colors:['#4CBC9A','#FF6A59'],
                    curve: 'smooth'
                },
                legend: {
                    show:false,
                    tooltipHoverFormatter: function(val, opts) {
                        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                    },
                    markers: {
                        fillColors:['#C046D3','#FF6A59','#FF9432'],
                        width: 16,
                        height: 16,
                        strokeWidth: 0,
                        radius: 16
                    }
                },
            
                xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  labels: {
                    style: {
                        colors: '#3E4954',
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: 100,
                      
                    },
                  },
                    axisBorder:{
                      show: false
                    },
                    axisTicks: {
                        show:false,  
                    },
                },
                yaxis: {
                    labels: {
                    offsetX:-27,
                    minWidth:40,
                    style: {
                        colors: '#3E4954',
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: 100,
                      
                    },
                  },
                   axisTicks: {
                      show: false,
                      borderType: 'solid',
                      color: '#78909C',
                      width: 6,
                      offsetX: 0,
                      offsetY: 0
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
                              color: '#4CBC9A',
                              opacity: .4
                            },
                            {
                              offset: 0.6,
                              color: '#4CBC9A',
                              opacity: .4
                            },
                            {
                               offset: 100,
                              color: '#fff',
                              opacity: 0.4
                            }
                          ],
                          [
                            {
                              offset: 0,
                              color: '#FEC64F',
                              opacity: .28
                            },
                            {
                              offset: 50,
                              color: '#FEC64F',
                              opacity: 0.25
                            },
                            {
                              offset: 100,
                              color: '#fff',
                              opacity: 0.4
                            }
                        ]
                    ]
        
                  },
                },
                colors:['#1EA7C5','#FF9432'],
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
                    breakpoint: 575,
                    options: {
                        markers: {
                             size: [6,6,4],
                             hover: {
                                size: 7,
                              }
                        }
                    }
                 }]  
                    
			}, 
		};
	}

  
	render() {
        return (
            <div id="activityz">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300}  />
            </div>
        );
	}
}

export default OrderAreaChart;