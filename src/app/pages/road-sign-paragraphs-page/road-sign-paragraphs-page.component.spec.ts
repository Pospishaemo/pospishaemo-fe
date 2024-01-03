import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSignParagraphsPageComponent } from './road-sign-paragraphs-page.component';

describe('RoadSignParagraphsPageComponent', () => {
  let component: RoadSignParagraphsPageComponent;
  let fixture: ComponentFixture<RoadSignParagraphsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadSignParagraphsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadSignParagraphsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
