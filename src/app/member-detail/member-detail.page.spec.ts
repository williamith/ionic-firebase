import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailPage } from './member-detail.page';

describe('MemberDetailPage', () => {
  let component: MemberDetailPage;
  let fixture: ComponentFixture<MemberDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
