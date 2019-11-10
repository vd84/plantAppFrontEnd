import { TestBed } from '@angular/core/testing';

import { PlantCareService } from './plant-care.service';

describe('PlantCareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantCareService = TestBed.get(PlantCareService);
    expect(service).toBeTruthy();
  });
});
