import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficRuleTestsPageComponent } from './traffic-rule-tests-page.component';

describe('TrafficRuleTestsPageComponent', () => {
  let component: TrafficRuleTestsPageComponent;
  let fixture: ComponentFixture<TrafficRuleTestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficRuleTestsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficRuleTestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
