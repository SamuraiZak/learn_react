import React, { ReactNode } from "react";

interface AlertButtonProp {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "success" | "light" | "dark" | "danger";
}

const AlertButton = ({
  children,
  onClick,
  color = "primary",
}: AlertButtonProp) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default AlertButton;
