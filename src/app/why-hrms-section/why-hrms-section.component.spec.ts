import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHrmsSectionComponent } from './why-hrms-section.component';

describe('WhyHrmsSectionComponent', () => {
  let component: WhyHrmsSectionComponent;
  let fixture: ComponentFixture<WhyHrmsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyHrmsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyHrmsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
