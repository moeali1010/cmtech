import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camera4Component } from './camera4.component';

describe('Camera4Component', () => {
  let component: Camera4Component;
  let fixture: ComponentFixture<Camera4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Camera4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Camera4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
