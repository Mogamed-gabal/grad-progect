import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalservicesComponent } from './criminalservices.component';

describe('CriminalservicesComponent', () => {
  let component: CriminalservicesComponent;
  let fixture: ComponentFixture<CriminalservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriminalservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
