import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camera3Component } from './camera3.component';

describe('Camera3Component', () => {
  let component: Camera3Component;
  let fixture: ComponentFixture<Camera3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Camera3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Camera3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
