import React, { useState } from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";

const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState(true);

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  if (!showNotifications) {
    return null;
  }

  return (
    <div className="Notifications">
      <button
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          right: 20,
        }}
        aria-label="close"
        onClick={handleCloseNotifications}
      >
        <img src={closeIcon} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
