import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedNovelsComponent } from './published-novels.component';

describe('PublishedNovelsComponent', () => {
  let component: PublishedNovelsComponent;
  let fixture: ComponentFixture<PublishedNovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedNovelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
