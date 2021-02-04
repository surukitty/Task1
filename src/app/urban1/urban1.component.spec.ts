import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urban1Component } from './urban1.component';

describe('Urban1Component', () => {
  let component: Urban1Component;
  let fixture: ComponentFixture<Urban1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Urban1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Urban1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
