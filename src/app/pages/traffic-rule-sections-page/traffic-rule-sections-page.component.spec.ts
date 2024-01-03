import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficRuleSectionsPageComponent } from './traffic-rule-sections-page.component';

describe('TrafficRuleSectionsPageComponent', () => {
  let component: TrafficRuleSectionsPageComponent;
  let fixture: ComponentFixture<TrafficRuleSectionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficRuleSectionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficRuleSectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
