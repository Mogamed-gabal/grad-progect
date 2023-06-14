import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrimrinalAnalogComponent } from './user-crimrinal-analog.component';

describe('UserCrimrinalAnalogComponent', () => {
  let component: UserCrimrinalAnalogComponent;
  let fixture: ComponentFixture<UserCrimrinalAnalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrimrinalAnalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrimrinalAnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
