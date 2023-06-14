import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateservicesComponent } from './realestateservices.component';

describe('RealestateservicesComponent', () => {
  let component: RealestateservicesComponent;
  let fixture: ComponentFixture<RealestateservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealestateservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
