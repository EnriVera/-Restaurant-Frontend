
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiCheckCircle, HiX, HiExclamation, HiExclamationCircle, HiEmojiSad } from "react-icons/hi";
import "./style/message.components.css";
import { DeleteNotification } from "../../../reducers/message/message.reducers"

const Toast = ({ position, autoDeleteInterval }) => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.message);
  const generateIcon = (type) => {
    switch (type) {
      case "INFO":
        return <HiExclamationCircle />;
      case "WARNING":
        return <HiExclamation />;
      case "DANGER":
        return <HiEmojiSad />;
      case "SUCCESS":
        return <HiCheckCircle />;
      default:
        return;
    }
  };

  const generateBackgroundColor = (type) => {
    switch (type) {
      case "INFO":
        return "#5bc0de";
      case "WARNING":
        return "#E8D84D";
      case "DANGER":
        return "#EA5454";
      case "SUCCESS":
        return "#5cb85c";
      default:
        return;
    }
  };

  return (
    <div className={`notification-container ${position}`}>
      {state.map((notification, i) => {
        if (autoDeleteInterval) {
          setInterval(() => {
            dispatch(DeleteNotification(notification.id));
          }, autoDeleteInterval);
        }
        return (
          <div
            style={{
              borderLeft: `5px solid ${generateBackgroundColor(notification.type)}`,
            }}
            key={notification.id}
            className={`notification toast ${position}`}
          >
            <div
              style={{
                color: generateBackgroundColor(notification.type),
              }}
              className="notification-image">
              {generateIcon(notification.type)}
            </div>
            <p className="notification-title">{notification.title}</p>
              <HiX
                onClick={() =>
                  dispatch(DeleteNotification(notification.id))
                }
                className="close-button"
              />
          </div>
        );
      })}
    </div>
  );
};

export default Toast;