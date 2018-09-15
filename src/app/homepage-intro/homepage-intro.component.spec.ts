import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageIntroComponent } from './homepage-intro.component';

describe('HomepageIntroComponent', () => {
  let component: HomepageIntroComponent;
  let fixture: ComponentFixture<HomepageIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageIntroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
