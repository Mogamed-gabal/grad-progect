import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLostsRebortComponent } from './user-losts-rebort.component';

describe('UserLostsRebortComponent', () => {
  let component: UserLostsRebortComponent;
  let fixture: ComponentFixture<UserLostsRebortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLostsRebortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLostsRebortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
