import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsBar } from './steps-bar';

describe('StepsBar', () => {
  let component: StepsBar;
  let fixture: ComponentFixture<StepsBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
