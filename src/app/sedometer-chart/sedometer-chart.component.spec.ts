import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedometerChartComponent } from './sedometer-chart.component';

describe('SedometerChartComponent', () => {
  let component: SedometerChartComponent;
  let fixture: ComponentFixture<SedometerChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedometerChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedometerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
