import { Component, OnInit } from '@angular/core';

@Component(
    {
        selector:    'notification-icon',
        templateUrl: './notification-icon.component.html',
        styleUrls:   ['./notification-icon.component.scss'],
    }
)
export class NotificationIconComponent implements OnInit {

    notifications = [
        {
            id:    1,
            title: 'Notification 1',
            text:  'Sample Text....',
            type:  'info',
        },
        {
            id:    2,
            title: 'Notification 2',
            text:  'Sample Text....',
            type:  'warn',
        },
        {
            id:    3,
            title: 'Notification 3',
            text:  'Sample Text....',
            type:  'warn',
        },
        {
            id:    4,
            title: 'Notification 4',
            text:  'Sample Text....',
            type:  'info',
        }
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

    /**
     * Delete notification
     * @param notificationId
     */
    deleteNotification(notificationId: number) {
        this.notifications = this.notifications.filter(n => {
            return n.id != notificationId;
        });
    }

    /**
     * Get number of notification
     */
    getNotificationNumber(): number {
        return this.notifications.length;
    }

    /**
     * Clear all notifications
     */
    clearNotifications(): void {
        this.notifications = [];
    }

    /**
     * Get color for notification type
     * @param type
     */
    getNotificationType(type: string): string {
        switch (type) {
            case "info":
                return "#3f51b5";
            case "warn":
                return "#f44336";
        }
    }

    /**
     * Get human readable name for the notification
     * @param type
     */
    getNotificationTypeString(type: string): string {
        switch (type) {
            case "info":
                return "Information";
            case "warn":
                return "Important";
        }
    }

}
