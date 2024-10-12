import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuallyHealthComponent } from './factually-health.component';

describe('FactuallyHealthComponent', () => {
  let component: FactuallyHealthComponent;
  let fixture: ComponentFixture<FactuallyHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactuallyHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactuallyHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
