import React from "react";

import { Container } from "./styles";

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#f89406",
  color = "#fff",
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Button;
