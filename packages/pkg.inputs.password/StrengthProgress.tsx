import { LinearProgress } from '@mui/material';

export type StrengthProgressProps = {
  // progress percent from 0 to 100;
  progress: number;
  color: string;
};

export const StrengthProgress = ({ progress, color }: StrengthProgressProps) => (
  <LinearProgress
    value={progress}
    valueBuffer={progress}
    variant="determinate"
    sx={{
      borderRadius: '3px',
      bgcolor: 'petersburg.10',
      '.MuiLinearProgress-bar': { borderRadius: '3px', bgcolor: color },
    }}
  />
);
