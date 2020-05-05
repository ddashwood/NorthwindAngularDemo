import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrGridViewComponent } from './list-or-grid-view.component';

describe('ListOrGridViewComponent', () => {
  let component: ListOrGridViewComponent;
  let fixture: ComponentFixture<ListOrGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
