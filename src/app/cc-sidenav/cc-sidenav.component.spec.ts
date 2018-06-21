
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcSidenavComponent } from './cc-sidenav.component';

describe('CcSidenavComponent', () => {
  let component: CcSidenavComponent;
  let fixture: ComponentFixture<CcSidenavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CcSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
