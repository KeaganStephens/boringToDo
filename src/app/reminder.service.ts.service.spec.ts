import { TestBed } from '@angular/core/testing';

import { ReminderServiceTsService } from './reminder.service.ts.service';

describe('ReminderServiceTsService', () => {
  let service: ReminderServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
