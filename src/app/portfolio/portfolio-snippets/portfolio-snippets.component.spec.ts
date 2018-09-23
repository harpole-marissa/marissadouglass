import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSnippetsComponent } from './portfolio-snippets.component';

describe('PortfolioSnippetsComponent', () => {
  let component: PortfolioSnippetsComponent;
  let fixture: ComponentFixture<PortfolioSnippetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
