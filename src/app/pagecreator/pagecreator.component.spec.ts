import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecreatorComponent } from './pagecreator.component';

describe('PagecreatorComponent', () => {
  let component: PagecreatorComponent;
  let fixture: ComponentFixture<PagecreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
