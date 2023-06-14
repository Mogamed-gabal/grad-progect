import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaboutcontainerComponent } from './pageaboutcontainer.component';

describe('PageaboutcontainerComponent', () => {
  let component: PageaboutcontainerComponent;
  let fixture: ComponentFixture<PageaboutcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageaboutcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageaboutcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
