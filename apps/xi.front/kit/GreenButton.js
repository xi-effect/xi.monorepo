import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const GreenButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.vladivostok.60,
  fontFamily: 'Golos',
  fontSize: '15px',
  lineHeight: '26px',
  letterSpacing: '0.46000000834465027px',
  '&:hover': {
    backgroundColor: theme.palette.vladivostok.100,
  },
}));

export default GreenButton;
