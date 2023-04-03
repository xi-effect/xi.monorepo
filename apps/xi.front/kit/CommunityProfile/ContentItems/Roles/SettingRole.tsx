import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Input } from 'pkg.inputs.input';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import { TabPanel } from './EditRole';

// Custom Radio
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '8px',
  width: 28,
  height: 28,
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'inherit',
  border: '1px solid black',
  'input:hover ~ &': {
    backgroundColor: 'inherit',
  },
});

// Inspired by blueprintjs
function BpRadio(props: any) {
  return (
    <Radio
      sx={{ p: 0, m: 0, mb: 1 }}
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

// ColorData
const roleColorData = [
  { color: '#B4BDFF' },
  { color: '#EEE7FF' },
  { color: '#B0F9CE' },
  { color: '#FBABAB' },
  { color: '#FBCAAD' },
  { color: '#D4FBAD' },
  { color: '#ADFBFB' },
  { color: '#FBADE0' },
  { color: '#999999' },
  { color: '#445AFF' },
  { color: '#9769FF' },
  { color: '#11743A' },
  { color: '#F42D2D' },
  { color: '#E75223' },
  { color: '#85E723' },
  { color: '#23E7E7' },
  { color: '#E723A5' },
  { color: '#333333' },
];

type SettingRoleType = {
  value: number;
  control: Control<any>;
  mobile700: boolean;
  mobile400: boolean;
};

const SettingRole: React.FC<SettingRoleType> = ({ value, control, mobile700, mobile400 }) => (
  <TabPanel value={value} index={0}>
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        mt: 3,
        mb: 1,
      }}
    >
      Название роли
    </Typography>
    <Controller
      name="name"
      control={control}
      render={({ field }) => (
        <Input
          variant="outlined"
          type="text"
          fullWidth
          placeholder="Введите название"
          autoComplete="on"
          {...field}
          sx={{
            backgroundColor: 'grayscale.0',
            mb: 3,
          }}
        />
      )}
    />
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        mb: 1,
      }}
    >
      Цвет роли
    </Typography>
    <Stack
      direction="row"
      flexWrap={mobile700 ? 'wrap' : 'nowrap'}
      width="100%"
      justifyContent={mobile700 ? 'center' : 'flex-start'}
    >
      <Stack direction="row" width={mobile700 ? '100%' : '220px'}>
        <div
          style={{
            backgroundColor: '#E6E6E6',
            width: mobile700 ? '50%' : '96px',
            height: '64px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            marginRight: '16px',
          }}
        >
          <CheckIcon />
        </div>
        <div
          style={{
            width: mobile700 ? '50%' : '96px',
            height: '64px',
            border: '2px solid rgb(230, 230, 230)',
            borderRadius: '8px',
            marginRight: '8px',
            marginBottom: mobile700 ? '16px' : 0,
          }}
        />
      </Stack>

      <Stack direction="row">
        <Controller
          name="colorRole"
          control={control}
          render={({ field }) => (
            <RadioGroup defaultValue="#B4BDFF" {...field}>
              <Stack
                direction="row"
                flexWrap="wrap"
                sx={{ width: mobile700 ? '100%' : 340, marginLeft: '12px' }}
                columnGap={0.5}
              >
                {roleColorData.map((r, index) => {
                  const widthHeigth = mobile400 ? '28px' : `${mobile700 ? '35.5px' : '28px'}`;
                  return (
                    <FormControlLabel
                      key={index}
                      value={r.color}
                      control={
                        <BpRadio
                          style={{
                            borderRadius: '8px',
                            backgroundColor: r.color,
                            width: widthHeigth,
                            height: widthHeigth,
                          }}
                        />
                      }
                      label=""
                    />
                  );
                })}
              </Stack>
            </RadioGroup>
          )}
        />
      </Stack>
    </Stack>
  </TabPanel>
);

export default SettingRole;
