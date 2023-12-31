import React, { FC, ReactNode } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children: ReactNode;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgrey" : "",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
