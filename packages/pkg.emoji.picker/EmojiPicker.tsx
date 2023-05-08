import { Emotions } from 'pkg.icons';
import { Dropdown } from 'pkg.navigation.dropdown';
import { EmojiList } from './EmojiList';

const DropdownClip = () => <Emotions sx={{ fontSize: '24px' }} />;

export const EmojiPicker = () => (
  <Dropdown
    Element={DropdownClip}
    menuProps={{
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
    }}
    buttonSx={{
      width: '32px',
      height: '32px',
      minWidth: '32px',
      borderRadius: '4px',
      bgcolor: 'petersburg.0',
      '&:hover': { bgcolor: 'petersburg.5' },
      '&:focus-visible': {
        bgcolor: 'petersburg.5',
      },
    }}
    menuSx={{
      '.MuiMenu-paper': {
        width: '278px',
        minWidth: '278px',
        maxWidth: '278px',
        maxHeight: '298px',
        height: '298px',
        p: 0,
      },
      '.MuiMenu-list': {
        p: 0,
      },
      '.MuiList-root': {
        p: 0,
      },
      '&.Dropdown-root': {
        width: 0,
        height: '100%',

        '& .MuiBackdrop-root': {
          bgcolor: 'unset',
          width: 0,
          height: 0,
        },

        '.MuiMenu-paper': {
          border: '1px solid',
          borderColor: 'grayscale.10',
          borderRadius: '8px',
          boxShadow: '0px 16px 8px rgba(16, 16, 16, 0.04), 0px 12px 16px rgba(16, 16, 16, 0.04)',
          p: 0,
          mt: 0,
        },
      },
    }}
  >
    <EmojiList />
  </Dropdown>
);
