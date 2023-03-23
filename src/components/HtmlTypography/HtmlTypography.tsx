import styled from '@emotion/styled';
import { TypographyStylesProvider } from '@mantine/core';

type THtmlTypographyProps = {
  children: string;
  component?: keyof HTMLElementTagNameMap;
};

const HtmlTypography = ({ children, component }: THtmlTypographyProps) => {
  const htmlTag = component ? component : 'p';
  const ChildrenTypography = styled(htmlTag)<{}>({});

  return (
    <TypographyStylesProvider>
      <ChildrenTypography dangerouslySetInnerHTML={{ __html: children }} />
    </TypographyStylesProvider>
  );
};

export default HtmlTypography;
