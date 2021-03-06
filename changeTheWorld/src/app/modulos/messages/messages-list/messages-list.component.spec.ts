import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesListComponent } from './messages-list.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { TooltipNotifyComponent } from 'src/app/shared/components/tooltip-notify/tooltip-notify.component';
import { TooltipMenuUserComponent } from 'src/app/shared/components/tooltip-menu-user/tooltip-menu-user.component';

describe('MessagesListComponent', () => {
  let component: MessagesListComponent;
  let fixture: ComponentFixture<MessagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MessagesListComponent,
        NavbarComponent,
        TooltipComponent,
        TooltipNotifyComponent,
        TooltipMenuUserComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
