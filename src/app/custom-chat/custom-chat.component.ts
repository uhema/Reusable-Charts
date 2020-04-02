import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-custom-chat',
  templateUrl: './custom-chat.component.html',
  styleUrls: ['./custom-chat.component.css']
})
export class CustomChatComponent implements OnInit {
  public chart = {
    "datasets": [
      { "data": [0, 30, 20, 40, 35, 45, 33, 0, 0], "label": "Bar 1" },
      { "data": [0, 50, 60, 55, 59, 30, 40, 0, 0], "label": "Bar 2" },
      { "data": [0, 50, 60, 55, 60, 45, 40, 45, 45], "label": "Line", "type": "line" }
    ],
    "labels": ["FirstPlaceholder", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "LastPlaceholder"],
    "options": {
      "legend": {
        "text": "You awesome chart with average line",
        "display": true,
      },
      "scales": {
        "yAxes": [{
          "ticks": {
          "beginAtZero": true
          }
        }],
        "xAxes": [{
          "ticks": {
          "min": "Monday",
          "max": "Sunday",
          }
        }],
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
