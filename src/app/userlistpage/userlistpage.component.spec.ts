import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistpageComponent } from './userlistpage.component';

describe('UserlistpageComponent', () => {
  let component: UserlistpageComponent;
  let fixture: ComponentFixture<UserlistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
