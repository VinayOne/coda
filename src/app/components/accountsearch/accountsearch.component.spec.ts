import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsearchComponent } from './accountsearch.component';

describe('AccountsearchComponent', () => {
  let component: AccountsearchComponent;
  let fixture: ComponentFixture<AccountsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
