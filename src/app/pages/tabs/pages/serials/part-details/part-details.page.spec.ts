import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartDetailsPage } from './part-details.page';

describe('PartDetailsPage', () => {
  let component: PartDetailsPage;
  let fixture: ComponentFixture<PartDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
