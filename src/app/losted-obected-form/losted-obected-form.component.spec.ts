import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostedObectedFormComponent } from './losted-obected-form.component';

describe('LostedObectedFormComponent', () => {
  let component: LostedObectedFormComponent;
  let fixture: ComponentFixture<LostedObectedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostedObectedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostedObectedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
