import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public barChartLabels: Label[] = ['CA', 'TX', 'NY', 'FL', 'IL', 'PA'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [35, 40, 50, 81, 56, 55, 40], label: 'under 5 yrs0' },
    { data: [20, 47, 40, 19, 86, 27, 20], label: '5 to 15 yrs' },
    { data: [40, 38, 50, 19, 86, 27, 30], label: '15 to 25 yrs' },
    { data: [28, 48, 40, 19, 86, 27, 70], label: '25 to 40 yrs' },
    { data: [38, 48, 40, 30, 66, 27, 50], label: '40 to 55 yrs' },
    { data: [60, 48, 25, 40, 86, 27, 20], label: '55 and above' }
  ];
  public barChartColors: Color[] = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
    { backgroundColor: 'blue' },
    { backgroundColor: 'gray' },
    { backgroundColor: 'teal' },
    { backgroundColor: 'yellow' },
  ]
  constructor() { }

  ngOnInit() {
  }

}







