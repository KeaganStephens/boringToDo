import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListComponentComponent } from './add-list-component.component';

describe('AddListComponentComponent', () => {
  let component: AddListComponentComponent;
  let fixture: ComponentFixture<AddListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddListComponentComponent]
    });
    fixture = TestBed.createComponent(AddListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
