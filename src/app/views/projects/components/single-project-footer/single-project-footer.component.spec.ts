import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectFooterComponent } from './single-project-footer.component';

describe('SingleProjectFooterComponent', () => {
  let component: SingleProjectFooterComponent;
  let fixture: ComponentFixture<SingleProjectFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
