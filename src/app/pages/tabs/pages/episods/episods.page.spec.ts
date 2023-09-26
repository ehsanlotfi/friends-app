import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodsPage } from './episods.page';

describe('EpisodsPage', () => {
  let component: EpisodsPage;
  let fixture: ComponentFixture<EpisodsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EpisodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
