import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveServerlessViewComponent } from './live-serverless-view.component';

describe('LiveServerlessViewComponent', () => {
  let component: LiveServerlessViewComponent;
  let fixture: ComponentFixture<LiveServerlessViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveServerlessViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveServerlessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
