import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const TextFieldCustom = styled(TextField)(({ error }) => ({
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    height: '56px',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    borderColor: `${error ? '#F42D2D' : 'petersburg.40'}`, // moscow.80 : petersburg.40
  },
  '& .MuiInputBase-input::placeholder': {
    paddingLeft: '1px',
    color: `${error ? '#F42D2D' : 'petersburg.40'}`, // moscow.80 : petersburg.40
  },
  '& .MuiFormHelperText-root': {
    marginTop: '4px',
    marginLeft: 0,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '16px',
    color: '#F42D2D', // moscow.80
  },
}));

export default TextFieldCustom;
