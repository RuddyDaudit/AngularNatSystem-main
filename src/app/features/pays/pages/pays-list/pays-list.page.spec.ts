import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysListPage } from './pays-list.page';

describe('PaysListPage', () => {
  let component: PaysListPage;
  let fixture: ComponentFixture<PaysListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaysListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PaysListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
