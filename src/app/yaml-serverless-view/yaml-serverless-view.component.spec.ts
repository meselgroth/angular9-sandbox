import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlServerlessViewComponent } from './yaml-serverless-view.component';

describe('YamlServerlessViewComponent', () => {
  let component: YamlServerlessViewComponent;
  let fixture: ComponentFixture<YamlServerlessViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlServerlessViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlServerlessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
