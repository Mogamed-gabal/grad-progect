import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostedOneDetailsComponent } from './losted-one-details.component';

describe('LostedOneDetailsComponent', () => {
  let component: LostedOneDetailsComponent;
  let fixture: ComponentFixture<LostedOneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostedOneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostedOneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
