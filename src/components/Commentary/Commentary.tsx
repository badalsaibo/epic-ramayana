import styled from '@emotion/styled';
import { Box } from '@mantine/core';

type TCommentaryProps = {
  children: React.ReactNode;
};

const Commentary = ({ children }: TCommentaryProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Commentary;

const Wrapper = styled(Box)(({ theme }) => {
  console.log(theme);
  return {
    // padding: theme.spacing(1),
    // backgroundColor: `rgba(${theme.vars.palette.success.mainChannel} / 0.15)`,
    // borderRadius: theme.spacing(1),
    '& p': {
      marginTop: 0,
      marginBottom: 0,
      textAlign: 'justify',
    },
  };
});
