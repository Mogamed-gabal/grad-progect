import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObjectRebortComponent } from './user-object-rebort.component';

describe('UserObjectRebortComponent', () => {
  let component: UserObjectRebortComponent;
  let fixture: ComponentFixture<UserObjectRebortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserObjectRebortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserObjectRebortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
