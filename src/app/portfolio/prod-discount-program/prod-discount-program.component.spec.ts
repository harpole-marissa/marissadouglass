import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDiscountProgramComponent } from './prod-discount-program.component';

describe('ProdDiscountProgramComponent', () => {
  let component: ProdDiscountProgramComponent;
  let fixture: ComponentFixture<ProdDiscountProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDiscountProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDiscountProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
