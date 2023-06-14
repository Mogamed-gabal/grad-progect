import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserobjectsComponent } from './userobjects.component';

describe('UserobjectsComponent', () => {
  let component: UserobjectsComponent;
  let fixture: ComponentFixture<UserobjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserobjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
