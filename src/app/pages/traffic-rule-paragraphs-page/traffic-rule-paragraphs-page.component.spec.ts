import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficRuleParagraphsPageComponent } from './traffic-rule-paragraphs-page.component';

describe('TrafficRuleParagraphsPageComponent', () => {
  let component: TrafficRuleParagraphsPageComponent;
  let fixture: ComponentFixture<TrafficRuleParagraphsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficRuleParagraphsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficRuleParagraphsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
