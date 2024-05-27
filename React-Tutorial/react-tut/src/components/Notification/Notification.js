import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Notification = () => {

    const showNotifications = () => {
        NotificationManager.info("Hello, I am Anubhooti Pandey.");
        NotificationManager.success('Success message', "Hello! I am under the water.");
        NotificationManager.error("Error Message", "Oh no! You are on wrong path!");
        NotificationManager.warning("Warning Message", "Hey! You might get in trouble!")
    }
  return (
    <div>
        <NotificationContainer />
        <button onClick={showNotifications}>Show Notification</button>
    </div>
  )
}

export default Notification;