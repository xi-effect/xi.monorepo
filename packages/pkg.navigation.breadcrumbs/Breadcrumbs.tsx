import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { Arrow } from 'pkg.icons.arrow';
import { breadcrumbLink } from './types';

export type BreadcrumbsProps = {
  breadcrumbs: breadcrumbLink[];
  Separator?: any;
  /* breadcrumbs link color */
  color?: string;
  /* breadcrumbs last link color */
  lastItemColor?: string;
};

const DefaultSeparator = <Arrow sx={{ fontSize: '12px' }} />;

export const Breadcrumbs = ({
  breadcrumbs,
  Separator = DefaultSeparator,
  color = 'grayscale.100',
  lastItemColor = 'grayscale.40',
}: BreadcrumbsProps) => (
  <MuiBreadcrumbs separator={Separator}>
    {breadcrumbs.map((item, index, breadcrumbsArray) => {
      const isLastItem = index === breadcrumbsArray.length - 1;
      const linkColor = !isLastItem ? lastItemColor : color;

      return (
        <Link
          href={item.link}
          sx={{
            color: linkColor,
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
