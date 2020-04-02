import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.css']
})
export class RadarchartComponent implements OnInit {
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 69, 80, 81, 56, 55], label: 'Student A' },
    { data: [38, 48, 40, 45, 46, 70], label: 'Student B' }
  ];


  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
