import { Stack, Text } from '@mantine/core';
import Commentary from 'components/Commentary';
import HtmlTypography from 'components/HtmlTypography';
import { SargaContentType, SargaContent } from 'interface/kanda';

type RenderContentProps = SargaContent & {
  content?: SargaContent[];
};

const RenderContent = (props: RenderContentProps) => {
  const { type, text, content } = props;

  if (type === 'conceptual') {
    return (
      <Stack>
        <Text>Conceptual</Text>
        <HtmlTypography>{text}</HtmlTypography>
      </Stack>
    );
  }

  if (type === 'commentary') {
    return (
      <Commentary>
        {/* <Typography>Commentary</Typography> */}
        <HtmlTypography>{text}</HtmlTypography>
      </Commentary>
    );
  }

  return <HtmlTypography>{text}</HtmlTypography>;
};

export default RenderContent;
