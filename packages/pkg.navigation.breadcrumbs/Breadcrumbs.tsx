import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { Arrow } from 'pkg.icons.arrow';
import { breadcrumbLink, SizesT } from './types';
import { breadcrumbSizes } from './styles';

export type BreadcrumbsProps = {
  breadcrumbs: breadcrumbLink[];
  size: SizesT;
  Separator?: any;
  /* breadcrumbs link color */
  color?: string;
  /* breadcrumbs last link color */
  lastItemColor?: string;
};

export const Breadcrumbs = ({
  breadcrumbs,
  size,
  Separator,
  color = 'grayscale.100',
  lastItemColor = 'grayscale.40',
}: BreadcrumbsProps) => {
  const DefaultSeparator = <Arrow sx={{ ...breadcrumbSizes[size] }} />;

  return (
    <MuiBreadcrumbs
      separator={Separator || DefaultSeparator}
      sx={{
        alignItems: 'center',
        '& .MuiBreadcrumbs-separator': { m: '2px 2px 0 2px' },
      }}
    >
      {breadcrumbs.map((item, index, breadcrumbsArray) => {
        const isLastItem = index === breadcrumbsArray.length - 1;
        const linkColor = !isLastItem ? lastItemColor : color;

        return (
          <Link
            href={item.link}
            sx={{
              ...breadcrumbSizes[size],
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
};
