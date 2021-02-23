import React from "react";

import { FullScreen, Container, Close } from "./styles";

export interface ModalProps {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  title: string;
}

export interface IFullScreen {
  open: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  title,
  children,
  ...props
}) => {
  return (
    <FullScreen open={open}>
      <Container {...props} title={title}>
        <Close onClick={() => setOpen(false)}>X</Close>
        <h2>{title}</h2>
        {children}
      </Container>
    </FullScreen>
  );
};

export default Modal;
