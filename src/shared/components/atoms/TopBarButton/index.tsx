import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  icon?: IconType;
  angle?: 'horizontal' | 'vertical';
}

const Button: React.FC<IButtonProps> = ({
  children,
  primary,
  icon: Icon,
  angle,
  ...rest
}: IButtonProps) => (
  <Container
    type="button"
    hasIcon={!!Icon}
    angle={angle}
    primary={primary}
    {...rest}
  >
    <span>{children}</span>
    {Icon && <Icon />}
  </Container>
);

Button.defaultProps = {
  angle: 'horizontal',
};

export default Button;
