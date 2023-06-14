import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostedObjectsComponent } from './losted-objects.component';

describe('LostedObjectsComponent', () => {
  let component: LostedObjectsComponent;
  let fixture: ComponentFixture<LostedObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostedObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostedObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
