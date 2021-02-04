import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urban3Component } from './urban3.component';

describe('Urban3Component', () => {
  let component: Urban3Component;
  let fixture: ComponentFixture<Urban3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Urban3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Urban3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
