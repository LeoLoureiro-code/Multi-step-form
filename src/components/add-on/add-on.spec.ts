import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOn } from './add-on';

describe('AddOn', () => {
  let component: AddOn;
  let fixture: ComponentFixture<AddOn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
