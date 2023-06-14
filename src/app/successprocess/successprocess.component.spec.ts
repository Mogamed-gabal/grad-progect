import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessprocessComponent } from './successprocess.component';

describe('SuccessprocessComponent', () => {
  let component: SuccessprocessComponent;
  let fixture: ComponentFixture<SuccessprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
