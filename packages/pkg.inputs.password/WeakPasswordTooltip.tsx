import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const WeakPasswordTooltip = () => {
  const TypographyStyled = styled(Typography)(({ theme }: any) => ({
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.petersburg['100'],
  }));

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement="right-start" />
  ))(({ theme }: any) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.petersburg['0'],
      border: '2px solid',
      borderColor: theme.palette.petersburg['5'],
      borderRadius: '8px',
      boxShadow: '0px 8px 8px rgba(16, 16, 16, 0.04), 0px 12px 16px rgba(16, 16, 16, 0.04)',
      color: theme.palette.petersburg['100'],

      width: '282px',
      height: '264px',
      padding: '16px',
    },
  }));

  return (
    <HtmlTooltip
      placement="bottom-end"
      title={
        <Stack spacing={1.5}>
          <TypographyStyled>Это популярный пароль. Его легко взломать.</TypographyStyled>
          <Stack spacing={0.25}>
            <TypographyStyled sx={{ fontWeight: 600 }}>Рекомендации</TypographyStyled>
            <Stack spacing={1}>
              <TypographyStyled>
                Чем больше длина пароля, тем сложнее его взломать.
              </TypographyStyled>
              <TypographyStyled>
                Используйте цифры, прописные и строчные буквы, знаки пунктуации.
              </TypographyStyled>
              <TypographyStyled>
                Используйте русское или английское словосочетание.
              </TypographyStyled>
              <TypographyStyled>
                Не используйте имя, дату рождения и другие общеизвестные даннные о вас и ваших
                близких.
              </TypographyStyled>
            </Stack>
          </Stack>
        </Stack>
      }
    >
      <Box
        sx={{
          color: 'grayscale.0',
          bgcolor: 'moscow.100',
          width: '12px',
          height: '12px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        ?
      </Box>
    </HtmlTooltip>
  );
};
