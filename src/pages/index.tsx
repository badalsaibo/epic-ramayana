import Head from 'next/head';
import ChevronRightCircle from 'icons/ChevronRightCircle';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Button, Stack, Text } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>Read Ramayana</title>
        <meta name="title" content="Read Ramayana" />
        <meta name="description" content="Read ramayana online " />
        <meta
          name="keywords"
          content="ramayana, hinduism, india, ram, sita, lakshman, culture, heritage, ramayan, hanuman, bharat, mahabharata, "
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Stack spacing={1}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad, molestias tenetur quam ipsa nostrum hic
          autem quaerat harum at aspernatur, repellendus illo iusto soluta tempora. Fugit, numquam! Illum, dolore.
        </Text>
      </Stack>
      <Button rightIcon={<ChevronRightCircle size={20} />} size="md" component={Link} href="/kanda">
        Start Reading
      </Button>
    </>
  );
}
