import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarsRebortComponent } from './user-cars-rebort.component';

describe('UserCarsRebortComponent', () => {
  let component: UserCarsRebortComponent;
  let fixture: ComponentFixture<UserCarsRebortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCarsRebortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCarsRebortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
