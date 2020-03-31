import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions,ChartDataSets } from 'chart.js';
import { SingleDataSet, Label,MultiDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Failure (0.68%)'], ['Success (99.32%)']];
  public pieChartData: SingleDataSet = [28, 72];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public piechartColor: Color[] = [{
    backgroundColor: ['#FF0000','#00C175']
  }]
// END HERE
  // PIE CHART 2
  public pieChartOptions2: ChartOptions = {
    responsive: true,
  }; 
  public pieChartData1: SingleDataSet = [61,10,10,6,5,8];
  public pieChartType1: ChartType = 'pie';
  public pieChartLegend1 = true;
  public pieChartPlugins1 = [];  
  public pieChartLabels1: Label[] = [['chrome'], ['Internet Explorer'], ['Firefox'], ['Edge'],['safari'],['others']];
  // END HERE
  // BAR CHART
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [ 'Saturday ','Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [1000, 1500, 700, 1200, 700, 500, 1000, 600 ], label: 'User Activity (Days of Weak Page View)' }
  ];
  // END HERE
  
  // LINE CHART
  
  lineChartData: ChartDataSets[] = [
    { data: [250, 236, 280, 250 , 213, 200 ], label: 'D0' },
    { data: [203, 200, 176, 180, 192, 180], label: 'D1' },
    { data: [150, 152, 140, 148, 127, 132], label: 'D2' },
    { data: [100, 97, 110, 80, 82, 90], label: 'D3' },
    { data: [55, 30, 35, 69, 60, 65], label: 'D4' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]
    }
    // {
    //   borderColor: ['gray','red','green', 'blue','black','yellow'],
    //   backgroundColor: ['#00C175', "#2788E2", "#01AED6", "#D43F05", "#CA9A06", "#3DB672"]
    // },
    // {
    //   borderColor: 'black',
    //   backgroundColor: 'rgba(255,255,0,0.28)',
    // },
    // {
    //   borderColor: 'green',
    //   backgroundColor: '#00C175',
    // },
    // {
    //   borderColor: 'black',
    //   backgroundColor: 'rgba(255,255,0,0.28)',
    // },
    // {
    //   borderColor: 'red',
    //   backgroundColor: '#FF0000',
    // },
    // {
    //   borderColor: 'red',
    //   backgroundColor: 'FF0000',
    // },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  // END HERE


  // dought chart
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  // end here
 
  constructor() {
    monkeyPatchChartJsTooltip();
     monkeyPatchChartJsLegend();
   }
  
  // doughnutChartLabels: Label[] = ['Success (99.32%)', 'Failure (0.68%)'];
  // doughnutChartData: MultiDataSet = [
  //   [28, 72]
  // ];
  // doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {
  }

}
