import { Injectable } from '@angular/core';
import { Reminder } from './reminder.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[] = [];

  getReminders(): Reminder[] {
    return this.reminders;
  }

  addReminder(reminder: Reminder): void {
    this.reminders.push(reminder);
  }
}
