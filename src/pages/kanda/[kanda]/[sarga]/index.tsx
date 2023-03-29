import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';

import Stack from '@mui/joy/Stack';
import { KANDAS } from 'constant/kanda';
import { SargaContent, TKanda } from 'interface/kanda';
import { ParsedUrlQuery } from 'querystring';
import { getChapterOfKanda, getChaptersOfKanda } from 'utils/ssg';
import HtmlTypography from 'components/HtmlTypography';
import ArrowHr from 'components/ArrowHr';
import RenderContent from 'components/RenderContent';
import { Box, Divider, Sheet, styled } from '@mui/joy';

type TSargaProps = {
  id: string;
  kanda: TKanda;
  sarga: string;
  title: string;
  chapter: string;
  overview: string;
  content: SargaContent[];
};

interface IParams extends ParsedUrlQuery {
  kanda: TKanda;
  sarga: string;
}

interface IPath {
  params: IParams;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  let paths: IPath[] = [];

  KANDAS.forEach(({ kanda }) => {
    const chapters = getChaptersOfKanda(kanda);

    chapters.forEach(({ sarga }) => {
      paths.push({ params: { kanda, sarga } });
    });
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<TSargaProps, IParams> = async ({ params }) => {
  const { kanda, sarga } = params as IParams;

  const data = getChapterOfKanda({ kanda, sarga });

  return {
    props: { ...data },
  };
};

const Sarga = (props: TSargaProps) => {
  const { id, kanda, sarga, title, chapter, overview, content } = props;
  return (
    <Container>
      <HtmlTypography level="h2" component="h1">
        {title}
      </HtmlTypography>
      <Stack sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <Divider />
        <HtmlTypography>{overview}</HtmlTypography>
        <Divider />
        <Stack>
          {content.map((props, idx) => (
            <RenderContent {...props} key={idx} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Sarga;

const Container = styled(Stack)(({ theme }) => ({
  height: '100%',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
