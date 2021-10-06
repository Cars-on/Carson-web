import React from 'react';
import { useRouter } from 'next/router';

import Button from '@/shared/components/atoms/Button';

import { Container, Title, SubTitle, Paragraph } from './styles';

const ContentText: React.FC = () => {
  const router = useRouter();

  const handleRedirectToHome: VoidFunction = () => {
    router.push('/');
  };

  return (
    <Container>
      <Title>ERROR 404!</Title>

      <SubTitle>Oops... Perdido no espaço?</SubTitle>

      <Paragraph>
        Não há nada por aqui. A página que está procurando não foi encontrada ou
        não existe
      </Paragraph>

      <Button type="button" onClick={handleRedirectToHome}>
        Retornar para Home
      </Button>
    </Container>
  );
};

export default ContentText;
