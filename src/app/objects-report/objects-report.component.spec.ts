import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsReportComponent } from './objects-report.component';

describe('ObjectsReportComponent', () => {
  let component: ObjectsReportComponent;
  let fixture: ComponentFixture<ObjectsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
