import styled from '@emotion/styled';
import { Box, BoxProps, createPolymorphicComponent, rem } from '@mantine/core';
import Breadcrumbs from 'components/Breadcrumbs';

type TLayoutProps = {
  children: React.ReactNode;
};

const _Container = styled(Box)(() => ({
  padding: rem('16px'),
}));

const Container = createPolymorphicComponent<'div', BoxProps>(_Container);

const Layout = ({ children }: TLayoutProps) => {
  return (
    <Container>
      <Breadcrumbs />
      {children}
    </Container>
  );
};

export default Layout;
