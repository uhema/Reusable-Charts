import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit {
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Springs', 'Summer', 'Fall', 'Winter'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 120];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
  }

}
