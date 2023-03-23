import ChevronRightCircle from 'icons/ChevronRightCircle';
import { Anchor, Breadcrumbs as MantineBreadcrumbs, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface IBreadcrumbsData {
  text: string;
  url: string;
}

type TBreadcrumbsProps = {
  data: IBreadcrumbsData[];
};

const StyledBreadcrumbs = styled(MantineBreadcrumbs)(() => ({
  padding: 0,
}));

const Breadcrumbs = () => {
  const theme = useMantineTheme();

  const router = useRouter();
  const linkPath = router.asPath.split('/');
  linkPath.shift();

  const pathArray = linkPath.map((path, i) => {
    return { text: path, url: '/' + linkPath.slice(0, i + 1).join('/') };
  });

  const breadcrumbs = [{ text: 'home', url: '/' }, ...pathArray];

  return (
    <MantineBreadcrumbs separator={<ChevronRightCircle size={14} color={theme.colors.gray[5]} />}>
      {breadcrumbs.map(({ text, url }) => (
        <Anchor component={Link} key={text} href={url}>
          {text}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
};

export default Breadcrumbs;
