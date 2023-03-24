import { Button, Divider, Grid, Stack, Text } from '@mantine/core';
import { KANDAS } from 'constant/kanda';
import { IChapters, TKanda } from 'interface/kanda';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { getChaptersOfKanda } from 'utils/ssg';
// import { getAllChaptersOfKanda, getAllKandas } from '../utils/ssg';

interface Params extends ParsedUrlQuery {
  kanda: TKanda;
}

type TKandaProps = {
  chapters: IChapters[];
};

const Kanda = ({ chapters }: TKandaProps) => {
  const router = useRouter();
  const { kanda } = router.query;
  return (
    <Stack spacing={2}>
      <Text>Chapters</Text>
      <Divider />

      <Stack>
        <Grid>
          {chapters.map(({ id, title, sarga }) => (
            <Grid.Col xs={2} key={id}>
              <Button variant="light" fullWidth component={Link} href={`/kanda/${kanda}/${sarga}`}>
                {sarga}
              </Button>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      <Divider />

      <Stack spacing={1} sx={{ mt: 1 }}>
        {chapters.map(({ id, title, sarga }) => (
          <Text key={id} component={Link} href={`/kanda/${kanda}/${sarga}`} sx={{ textDecoration: 'none' }}>
            {sarga}.&nbsp;{title}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default Kanda;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: KANDAS.map(({ kanda }) => ({ params: { kanda } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { kanda } = context.params as Params;

  const chapters = getChaptersOfKanda(kanda);

  return {
    props: {
      chapters,
    },
  };
};
