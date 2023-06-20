import React, { useRef, useState } from 'react';
import { Box, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { menuStyles } from './Styles/styles';
import Microphone from './Icons/Microphone';
import Arrow from './Icons/Arrow';
import Speakers from './Icons/Speakers';
import Camera from './Icons/Camera';

type DeviceMenuT = {
  devices: MediaDeviceInfo[];
  colorScheme?: 'light' | 'dark';
  deviceControl: (id: string) => void;
  device: 'audiooutput' | 'audioinput' | 'videoinput';
};

const DeviceMenu: React.FC<DeviceMenuT> = (props) => {
  const { deviceControl, device, devices, colorScheme = 'light' } = props;

  const [activeDevice, setActiveDevice] = useState<string | null>(null);

  const listRef = useRef<HTMLDivElement | null>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onDeviceControlChange = (id: string, label: string) => {
    deviceControl(id);

    setAnchorEl(null);

    setActiveDevice(label);
  };

  return (
    <>
      <Stack
        ref={listRef}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        direction="row"
        alignItems="center"
        sx={{
          p: '11px 21px',
          borderRadius: '8px',
          position: 'relative',
          border: '1px solid #E6E6E6',
          transition: 'opacity 0.3s ease',
          opacity: !devices.length ? '0.5' : '1',
          mr: colorScheme === 'light' ? '8px' : 0,
          cursor: !devices.length ? 'default' : 'pointer',
          pointerEvents: !devices.length ? 'none' : 'auto',
          flex: colorScheme === 'light' ? '0 1 81%' : '1 1 100%',
        }}
      >
        <Stack sx={{ svg: { fill: colorScheme === 'light' ? '#000' : '#fff' } }}>
          {(device === 'audioinput' && <Microphone />) ||
            (device === 'audiooutput' && <Speakers />) ||
            (device === 'videoinput' && <Camera />)}
        </Stack>

        <Typography
          sx={{
            left: '50px',
            fontWeight: 400,
            fontSize: '16px',
            overflow: 'hidden',
            position: 'absolute',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: 'calc(100% - 100px)',
            color: colorScheme === 'light' ? 'grayscale.100' : 'grayscale.0',
          }}
        >
          {activeDevice ||
            `${
              (device === 'audioinput' && 'Встроенный микрофон') ||
              (device === 'audiooutput' && 'Встроенные динамики') ||
              (device === 'videoinput' && 'Встроенная камера ')
            }`}
        </Typography>

        <Box
          sx={{
            ml: 'auto',
            transition: 'transform 0.2s ease-in-out',
            transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <Arrow />
        </Box>
      </Stack>

      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        sx={menuStyles(listRef.current?.clientWidth, colorScheme)}
      >
        {devices.map((d) => (
          <MenuItem
            key={d.deviceId}
            onClick={() => onDeviceControlChange(d.deviceId, d.label)}
            disabled={activeDevice ? d.label === activeDevice : d.deviceId === 'default'}
            className={
              activeDevice
                ? `${d.label === activeDevice ? 'active' : ''}`
                : `${d.deviceId === 'default' && 'active'}`
            }
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '16px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: 'calc(100% - 20px)',
                color: colorScheme === 'light' ? '#1B1B1B' : 'grayscale.0',
              }}
            >
              {d.label || 'По умолчанию'}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DeviceMenu;
