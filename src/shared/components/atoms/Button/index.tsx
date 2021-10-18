import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  children,
  ...rest
}: IButtonProps) => (
  <Container type="button" {...rest}>
    <span>{children}</span>
  </Container>
);

export default Button;
