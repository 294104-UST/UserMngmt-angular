import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteUsersComponent } from './update-delete-users.component';

describe('UpdateDeleteUsersComponent', () => {
  let component: UpdateDeleteUsersComponent;
  let fixture: ComponentFixture<UpdateDeleteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDeleteUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
