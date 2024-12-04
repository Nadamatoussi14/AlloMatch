import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoureventPage } from './yourevent.page';

describe('YoureventPage', () => {
  let component: YoureventPage;
  let fixture: ComponentFixture<YoureventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YoureventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
