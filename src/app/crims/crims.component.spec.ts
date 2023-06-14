import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimsComponent } from './crims.component';

describe('CrimsComponent', () => {
  let component: CrimsComponent;
  let fixture: ComponentFixture<CrimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
