import { FC } from 'react';

const NotificationBar: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="notification__container">
      <div className="notification__message">{message}</div>
    </div>
  );
};

export default NotificationBar;
