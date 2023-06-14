import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostsComponent } from './losts.component';

describe('LostsComponent', () => {
  let component: LostsComponent;
  let fixture: ComponentFixture<LostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
