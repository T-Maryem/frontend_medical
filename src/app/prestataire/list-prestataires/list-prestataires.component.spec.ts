import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrestatairesComponent } from './list-prestataires.component';

describe('ListPrestatairesComponent', () => {
  let component: ListPrestatairesComponent;
  let fixture: ComponentFixture<ListPrestatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrestatairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrestatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
