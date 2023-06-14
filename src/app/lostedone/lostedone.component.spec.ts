import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostedoneComponent } from './lostedone.component';

describe('LostedoneComponent', () => {
  let component: LostedoneComponent;
  let fixture: ComponentFixture<LostedoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostedoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
