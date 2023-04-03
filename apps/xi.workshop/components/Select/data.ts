import { Folder } from 'pkg.icons';
import { v4 } from 'uuid';

export const selectTestData = [
  /* groups */
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2' },
          { id: v4(), value: 'Item3' },
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2' },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item4', isDisabled: true },
          { id: v4(), value: 'Item5', isDefault: true },
        ],
      },
    ],
    cancelItem: 'Item',
    size: 's',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2' },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        items: [
          { id: v4(), value: 'Item4', isDisabled: true },
          { id: v4(), value: 'Item5', isDefault: true },
        ],
      },
    ],
    cancelItem: 'Item',
    size: 'm',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item4' },
          { id: v4(), value: 'Item5' },
          { id: v4(), value: 'Item6' },
          { id: v4(), value: 'Item7' },
        ],
      },
    ],
    // cancelItem: 'Item',
    size: 's',
    type: 'warning',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2' },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item4', isDisabled: true },
          { id: v4(), value: 'Item5' },
        ],
      },
    ],
    cancelItem: 'Item',
    size: 'm',
    type: 'warning',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2', isDefault: true },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item4', isDisabled: true },
          { id: v4(), value: 'Item5' },
        ],
      },
    ],
    cancelItem: 'Item',
    size: 's',
    type: 'error',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2' },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item4', isDisabled: true },
          { id: v4(), value: 'Item5', isDefault: true },
        ],
      },
    ],
    cancelItem: 'Item',
    size: 'm',
    type: 'error',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2' },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item4', isDisabled: true },
          { id: v4(), value: 'Item5', isDefault: true },
        ],
      },
    ],
    cancelItem: 'Item',
    size: 's',
    type: 'disabled',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    groups: [
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item1' },
          { id: v4(), value: 'Item2' },
          { id: v4(), value: 'Item3' },
        ],
      },
      {
        id: v4(),
        title: 'Title',
        items: [
          { id: v4(), value: 'Item4' },
          { id: v4(), value: 'Item5' },
        ],
      },
    ],
    cancelItem: 'Item',
    size: 'm',
    type: 'disabled',
    Icon: Folder,
  },

  /* items */
  {
    id: v4(),
    // items,
    items: [
      { id: v4(), value: 'Item1', isDefault: true },
      { id: v4(), value: 'Item2' },
      { id: v4(), value: 'Item3' },
      { id: v4(), value: 'Item4', isDisabled: true },
      { id: v4(), value: 'Item5' },
    ],
    cancelItem: 'Item',
    size: 's',
    Icon: Folder,
  },
  {
    id: v4(),
    // items,
    items: [
      { id: v4(), value: 'Item1' },
      { id: v4(), value: 'Item2', isDisabled: true },
      { id: v4(), value: 'Item3', isDisabled: true },
      { id: v4(), value: 'Item4', isDisabled: true },
      { id: v4(), value: 'Item5', isDefault: true },
    ],
    cancelItem: 'Item',
    size: 'm',
    Icon: Folder,
  },
];
