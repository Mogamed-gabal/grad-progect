import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocmentsComponent } from './docments.component';

describe('DocmentsComponent', () => {
  let component: DocmentsComponent;
  let fixture: ComponentFixture<DocmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
