import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urban2Component } from './urban2.component';

describe('Urban2Component', () => {
  let component: Urban2Component;
  let fixture: ComponentFixture<Urban2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Urban2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Urban2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
