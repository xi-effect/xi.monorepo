import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { Arrow } from 'pkg.icons.arrow';
import { breadcrumbLink } from './types';

export type BreadcrumbsProps = {
  breadcrumbs: breadcrumbLink[];
  Separator?: any;
};

const DefaultSeparator = <Arrow sx={{ fontSize: '12px' }} />;

export const Breadcrumbs = ({ breadcrumbs, Separator = DefaultSeparator }: BreadcrumbsProps) => (
  <MuiBreadcrumbs separator={Separator}>
    {breadcrumbs.map((item, index, breadcrumbsArray) => {
      const isLastItem = index === breadcrumbsArray.length - 1;
      const color = !isLastItem ? 'grayscale.40' : 'grayscale.100';
      return (
        <Link
          href={item.link}
          sx={{
            color,
            pointerEvents: isLastItem ? 'none' : '',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: isLastItem ? 'none' : 'underline',
            },
          }}
        >
          {item.name}
        </Link>
      );
    })}
  </MuiBreadcrumbs>
);
