import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLostedComponent } from './user-losted.component';

describe('UserLostedComponent', () => {
  let component: UserLostedComponent;
  let fixture: ComponentFixture<UserLostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLostedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
