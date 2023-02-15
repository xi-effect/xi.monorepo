import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { Arrow } from 'pkg.icons.arrow';
import { breadcrumbLink, SizesT } from './types';
import { breadcrumbSizes, separatorSizes } from './styles';

export type BreadcrumbsProps = {
  breadcrumbs: breadcrumbLink[];
  size: SizesT;
  Separator?: any;
  /* breadcrumbs link color */
  color?: string;
  /* breadcrumbs last link color */
  hoverStyles?: any;
  lastItemColor?: string;
};

export const Breadcrumbs = ({
  breadcrumbs,
  size,
  Separator,
  color = 'grayscale.40',
  hoverStyles,
  lastItemColor = 'grayscale.100',
}: BreadcrumbsProps) => {
  const CustomSeparator = Separator ? (
    <Separator sx={{ ...separatorSizes[size], color }} />
  ) : (
    <Arrow sx={{ ...separatorSizes[size], color }} />
  );

  return (
    <MuiBreadcrumbs
      separator={CustomSeparator}
      sx={{
        alignItems: 'center',
        '& .MuiBreadcrumbs-separator': { m: '0 3px' },
      }}
    >
      {breadcrumbs.map((item, index, breadcrumbsArray) => {
        const isLastItem = index === breadcrumbsArray.length - 1;
        const linkColor = isLastItem ? lastItemColor : color;
        const hover = hoverStyles || { textDecoration: isLastItem ? 'none' : 'underline' };

        return (
          <Link
            href={item.link}
            sx={{
              ...breadcrumbSizes[size],
              color: linkColor,
              pointerEvents: isLastItem ? 'none' : '',
              textDecoration: 'none',
              transition: '0.3s',
              '&:hover': {
                ...hover,
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
