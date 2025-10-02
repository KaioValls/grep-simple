import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryInfo } from './repository-info';

describe('RepositoryInfo', () => {
  let component: RepositoryInfo;
  let fixture: ComponentFixture<RepositoryInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
