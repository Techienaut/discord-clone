import React from "react";
import styles from "./styles.module.css";

type OnlineStatus = "Online" | "Offline";
type Size = "sm";

interface Props {
  userId: number;
  size?: Size;
  onlineStatus?: OnlineStatus;
}

export const AvatarWithStatus: React.FC<Props> = ({
  userId,
  size = "sm",
  onlineStatus = "Offline",
}) => {
  const sizeClass = (size: Size): string => {
    switch (size) {
      case "sm":
        return styles.sizeSm;
    }
  };

  const onlineStatusColorClass = (onlineStatus: OnlineStatus): string => {
    switch (onlineStatus) {
      case "Online":
        return styles.onlineStatusDotColor;
      case "Offline":
        return styles.offlineStatusDotColor;
    }
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        className={sizeClass(size)}
      >
        <g>
          <defs>
            <pattern
              id="idfhJUClKw7g-fillImage"
              width="100%"
              height="100%"
              patternContentUnits="objectBoundingBox"
            >
              <image
                width="1"
                height="1"
                x="0"
                y="0"
                xlinkHref={`user-avatars/${userId}-user-avatar.png`}
                // xlinkHref="user-avatars/example-user-avatar.png preserveAspectRatio='none'"
                // transform="translate(-8.881784197001252e-16, 0) scale(1.0000000000000018, 1)"
              ></image>
            </pattern>
          </defs>
          <path
            d="M 16 0.533 C 24.542 0.533 31.467 7.458 31.467 16 C 31.467 17.814 31.154 19.555 30.581 21.172 C 29.361 19.397 27.316 18.233 25 18.233 C 21.263 18.233 18.233 21.263 18.233 25 C 18.233 27.316 19.397 29.361 21.172 30.581 C 19.555 31.154 17.814 31.467 16 31.467 C 7.458 31.467 0.533 24.542 0.533 16 C 0.533 7.458 7.458 0.533 16 0.533 Z"
            fill="url(#idfhJUClKw7g-fillImage)"
          ></path>
        </g>
        <path
          className={onlineStatusColorClass(onlineStatus)}
          d="M 25 20 C 27.761 20 30 22.239 30 25 C 30 27.761 27.761 30 25 30 C 22.239 30 20 27.761 20 25 C 20 22.239 22.239 20 25 20 Z"
        ></path>
      </svg>
    </div>
  );
};
