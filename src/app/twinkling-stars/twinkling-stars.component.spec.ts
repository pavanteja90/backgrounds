import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinklingStarsComponent } from './twinkling-stars.component';

describe('TwinklingStarsComponent', () => {
  let component: TwinklingStarsComponent;
  let fixture: ComponentFixture<TwinklingStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinklingStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinklingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
