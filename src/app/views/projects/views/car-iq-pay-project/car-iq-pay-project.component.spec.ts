import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarIqPayProjectComponent } from './car-iq-pay-project.component';

describe('CarIqPayProjectComponent', () => {
  let component: CarIqPayProjectComponent;
  let fixture: ComponentFixture<CarIqPayProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarIqPayProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarIqPayProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
