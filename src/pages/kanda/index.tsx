import { Box, Button, Divider, Grid, Stack, Text } from '@mantine/core';
import Breadcrumbs from 'components/Breadcrumbs';
import { KANDAS } from 'constant/kanda';
import Link from 'next/link';

const Kanda = () => {
  return (
    <Stack spacing={1}>
      <Text>Kandas</Text>
      <Divider sx={{ mb: 1 }} />
      <Box>
        <Grid>
          {KANDAS.map(({ kanda, url }) => (
            <Grid.Col key={kanda} xs={6}>
              <Button component={Link} href={`/kanda${url}`}>
                {kanda}
              </Button>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Kanda;
