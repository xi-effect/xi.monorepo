import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { breadcrumbLink } from './types';

export type BreadcrumbsProps = {
  breadcrumbs: breadcrumbLink[];
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <MuiBreadcrumbs>
    {breadcrumbs.map((item) => (
      <Link href={item.link}>{item.name}</Link>
    ))}
  </MuiBreadcrumbs>
);
