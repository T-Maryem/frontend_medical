import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdonnanceComponent } from './list-ordonnance.component';

describe('ListOrdonnanceComponent', () => {
  let component: ListOrdonnanceComponent;
  let fixture: ComponentFixture<ListOrdonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdonnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
