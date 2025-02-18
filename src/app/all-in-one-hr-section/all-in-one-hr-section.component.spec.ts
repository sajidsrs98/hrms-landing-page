import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInOneHrSectionComponent } from './all-in-one-hr-section.component';

describe('AllInOneHrSectionComponent', () => {
  let component: AllInOneHrSectionComponent;
  let fixture: ComponentFixture<AllInOneHrSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllInOneHrSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInOneHrSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
