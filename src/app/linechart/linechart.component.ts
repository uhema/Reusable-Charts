import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions,ChartDataSets } from 'chart.js';
import { SingleDataSet, Label,MultiDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
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
];
lineChartLegend = true;
lineChartPlugins = [];
lineChartType = 'line';
// END HERE
  constructor() { }

  ngOnInit() {
  }

}
