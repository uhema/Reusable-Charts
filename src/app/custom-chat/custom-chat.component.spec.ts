import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChatComponent } from './custom-chat.component';

describe('CustomChatComponent', () => {
  let component: CustomChatComponent;
  let fixture: ComponentFixture<CustomChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
