import { TestBed } from '@angular/core/testing';

import { ShowPhotoService } from './show-photo.service';

describe('ShowPhotoService', () => {
  let service: ShowPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
