import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryOptions } from './repository-options';

describe('RepositoryOptions', () => {
  let component: RepositoryOptions;
  let fixture: ComponentFixture<RepositoryOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
