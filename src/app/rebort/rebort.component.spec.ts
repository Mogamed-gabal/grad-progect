import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebortComponent } from './rebort.component';

describe('RebortComponent', () => {
  let component: RebortComponent;
  let fixture: ComponentFixture<RebortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
