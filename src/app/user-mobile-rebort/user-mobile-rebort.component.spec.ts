import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMobileRebortComponent } from './user-mobile-rebort.component';

describe('UserMobileRebortComponent', () => {
  let component: UserMobileRebortComponent;
  let fixture: ComponentFixture<UserMobileRebortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMobileRebortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMobileRebortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
