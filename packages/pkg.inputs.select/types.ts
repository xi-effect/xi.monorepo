export type SizesT = 'm' | 's';
export type TypesT = 'default' | 'warning' | 'error' | 'disabled';
export type ItemT = {
  id: string;
  value: string;
  isDefault?: boolean;
  isDisabled?: boolean;
};
export type GroupT = {
  id: string;
  title?: string;
  items: ItemT[];
};
