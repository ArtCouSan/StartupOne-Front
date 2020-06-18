import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListsYoursComponent } from './posts-lists-yours.component';

describe('PostsListsYoursComponent', () => {
  let component: PostsListsYoursComponent;
  let fixture: ComponentFixture<PostsListsYoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListsYoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListsYoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
