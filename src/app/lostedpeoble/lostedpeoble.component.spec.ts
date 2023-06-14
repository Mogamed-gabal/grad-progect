import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostedpeobleComponent } from './lostedpeoble.component';

describe('LostedpeobleComponent', () => {
  let component: LostedpeobleComponent;
  let fixture: ComponentFixture<LostedpeobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostedpeobleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostedpeobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
