import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotSvg } from './mascot-svg';

describe('MascotSvg', () => {
  let component: MascotSvg;
  let fixture: ComponentFixture<MascotSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
