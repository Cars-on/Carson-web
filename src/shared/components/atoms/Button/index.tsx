import React from 'react';
import { IconType } from 'react-icons/lib';

import { Container } from './styles';

interface IButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  icon?: IconType;
  angle?: 'horizontal' | 'vertical';
}

const Button = ({ children, primary, icon: Icon, angle }: IButtonProps) => (
  <Container type="button" hasIcon={!!Icon} angle={angle} primary={primary}>
    <span>{children}</span>
    {Icon && <Icon />}
  </Container>
);

Button.defaultProps = {
  angle: 'horizontal',
};

export default Button;
