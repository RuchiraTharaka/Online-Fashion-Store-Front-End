import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemComponent } from './addItem.component';

describe('AdditemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemComponent]
    });
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
