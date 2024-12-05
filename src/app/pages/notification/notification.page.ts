import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage  {

  notifications = [
    { title: 'New Message', message: 'You have received a new message.' },
    { title: 'Update Available', message: 'A new update is available for download.' },
    { title: 'Event Reminder', message: 'Don’t forget about your upcoming event!' },
    // Add more notifications as needed
  ];

  constructor() {
    // You can fetch notifications from a service or API here if needed
  }

}