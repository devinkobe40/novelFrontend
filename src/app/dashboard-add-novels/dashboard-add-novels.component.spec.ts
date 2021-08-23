import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddNovelsComponent } from './dashboard-add-novels.component';

describe('DashboardAddNovelsComponent', () => {
  let component: DashboardAddNovelsComponent;
  let fixture: ComponentFixture<DashboardAddNovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddNovelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
