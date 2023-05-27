import React, { forwardRef } from 'react';
import { Box, Checkbox, FormControlLabel, SxProps, Theme, Tooltip } from '@mui/material';

type AccessCheckboxT = {
  text: string;
  value: number;
  checked: boolean;
  disabled?: boolean;
  disabledText?: string;
  sx?: SxProps<Theme>;
};

const AccessCheckbox = forwardRef<HTMLButtonElement, AccessCheckboxT>((props, ref) => {
  const { disabledText, text, checked, value, disabled, sx, ...restProps } = props;

  return (
    <Tooltip title={disabled ? disabledText : ''} placement="left">
      <FormControlLabel
        labelPlacement="start"
        sx={{
          '&.MuiFormControlLabel-root': {
            mr: 0,
            ml: 0,
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            '& .MuiTypography-root': {
              fontSize: '14px',
            },
          },
          mb: '18px',
          ...sx,
        }}
        control={
          <Checkbox
            icon={<Box width="12px" sx={{ height: '8px', width: '12px' }} />}
            checkedIcon={
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 4L4.5 7L10.5 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            ref={ref}
            value={value}
            disabled={disabled}
            defaultChecked={checked}
            {...restProps}
          />
        }
        label={<Box color={disabled ? 'lightgray' : 'currentcolor'}>{text}</Box>}
      />
    </Tooltip>
  );
});

export default AccessCheckbox;
