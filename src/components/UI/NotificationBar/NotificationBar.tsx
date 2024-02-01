const NotificationBar = ({ message }: { message: string }) => {
  return (
    <div className="notification__container">
      <div className="notification__message">{message}</div>
    </div>
  );
};

export default NotificationBar;
