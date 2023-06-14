import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageserveciseComponent } from './pageservecise.component';

describe('PageserveciseComponent', () => {
  let component: PageserveciseComponent;
  let fixture: ComponentFixture<PageserveciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageserveciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageserveciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
