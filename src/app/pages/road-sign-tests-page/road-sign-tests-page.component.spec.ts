import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSignTestsPageComponent } from './road-sign-tests-page.component';

describe('RoadSignTestsPageComponent', () => {
  let component: RoadSignTestsPageComponent;
  let fixture: ComponentFixture<RoadSignTestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadSignTestsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadSignTestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
