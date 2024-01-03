import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSignSectionsPageComponent } from './road-sign-sections-page.component';

describe('RoadSignSectionsPageComponent', () => {
  let component: RoadSignSectionsPageComponent;
  let fixture: ComponentFixture<RoadSignSectionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadSignSectionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadSignSectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
