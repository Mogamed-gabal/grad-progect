import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostedObectedPageComponent } from './losted-obected-page.component';

describe('LostedObectedPageComponent', () => {
  let component: LostedObectedPageComponent;
  let fixture: ComponentFixture<LostedObectedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostedObectedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostedObectedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
