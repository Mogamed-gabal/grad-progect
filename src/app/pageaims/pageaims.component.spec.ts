import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaimsComponent } from './pageaims.component';

describe('PageaimsComponent', () => {
  let component: PageaimsComponent;
  let fixture: ComponentFixture<PageaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
