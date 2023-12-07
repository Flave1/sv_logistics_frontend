import React from "react";
import ReactApexChart from "react-apexcharts";
//import ApexCharts from 'apexcharts';
//import { Link } from "react-router-dom";

class ApexBarChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: '',
					data: [120, 90, 70, 40,50, 18, 70, 90,70, 40,50, 18],
				}, 
				{
				  name: '',
				  data: [75,50, 18, 70, 40,70, 100,50, 18, 40, 55, 100]
				}, 
            ],
			options: {
				chart: {
				//id: 'assetDistribution',
					type: "bar",
					height: 280,
					toolbar: {
						show: false,
					},
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
                states: {
                    hover: {
                    filter: 'none',
                    }
                },
                colors:['#1FBF75', 'var(--primary)'],
            
                markers: {
                    shape: "circle",
                },
		
		
                legend: {
                    show: false,
                    fontSize: '14px',
                    position: 'top',
                    labels: {
                        colors: '#000000',					
                    },
                    markers: {
                        width: 18,
                        height: 18,
                        strokeWidth:50,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,	
                    }
                },
                stroke: {
                    show: true,
                    width:3,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ['transparent']
                },
                grid: {
                    borderColor: '#eee',
                },
                xaxis: {
                    position: 'bottom',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {
                    show: true,
                        style: {
                            colors: '#999999',
                            fontSize: '14px',
                            fontFamily: 'poppins',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    axisBorder:{
                        show: false,                          
                     },
                    axisTicks: {
                        show:false                        
                    },
                    crosshairs: {
                        show: false,
                    }
                },
                yaxis: {
                    labels: {
                        offsetX:-16,
                        style: {
                            colors: '#787878',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 100,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                fill: {
                    opacity: 1,
                    colors:['#1FBF75', 'var(--primary)'],
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                        return " " + val + ""
                        }
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        series: [
                            {
                                name: '',
                                data: [120, 90, 70],
                                //radius: 12,	
                            }, 
                            {
                            name: '',
                            data: [75,50, 18]
                            }, 
                            
                        ],
                        plotOptions: {
                        bar: {	
                            columnWidth: '70%',
                        },
                        
                        },
                        xaxis:{
                            categories: ['Jan', 'Feb', 'Mar'],
                        }
                        
                    }
                }]    
                    
			}, 
		};
	}

  
	render() {
        return (
            <div id="chartBar5">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={280}  />
            </div>
        );
	}
}

export default ApexBarChart;