import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>You got a new appointment</p>
            <time>2 hours ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You got a new appointment</p>
            <time>2 hours ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You got a new appointment</p>
            <time>2 hours ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You got a new appointment</p>
            <time>2 hours ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You got a new appointment</p>
            <time>2 hours ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You got a new appointment</p>
            <time>2 hours ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You got a new appointment</p>
            <time>2 hours ago</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}