import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxMatSliderComponent } from './rx-mat-slider.component';

describe('RxMatSliderComponent', () => {
  let component: RxMatSliderComponent;
  let fixture: ComponentFixture<RxMatSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxMatSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxMatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
