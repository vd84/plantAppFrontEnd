import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPlantPage } from './specific-plant.page';

describe('SpecificPlantPage', () => {
  let component: SpecificPlantPage;
  let fixture: ComponentFixture<SpecificPlantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificPlantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificPlantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
