import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectHeaderComponent } from './single-project-header.component';

describe('SingleProjectHeaderComponent', () => {
  let component: SingleProjectHeaderComponent;
  let fixture: ComponentFixture<SingleProjectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
