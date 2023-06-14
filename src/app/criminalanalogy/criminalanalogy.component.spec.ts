import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalanalogyComponent } from './criminalanalogy.component';

describe('CriminalanalogyComponent', () => {
  let component: CriminalanalogyComponent;
  let fixture: ComponentFixture<CriminalanalogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalanalogyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriminalanalogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
