import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Link from 'next/link';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DrawerItem {
  text: string;
  href?: string;
}

interface AnchorTemporaryDrawerProps {
  anchor: Anchor;
  items: DrawerItem[];
  drawerWidth?: number | string;
}

const DrawerMenu: React.FC<AnchorTemporaryDrawerProps> = ({ anchor, items, drawerWidth = 250 }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : drawerWidth }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="grid grid-cols-1 gap-3 p-[10px]">
        {items.map((item, index) => (
          <Link className="text-sm font-medium font-text" href={item.href || '/'} key={index}>
            {item.text}
          </Link>
        ))}
      </div>
      <Divider />
    </Box>
  );

  return (
    <div className="block md:hidden">
      <Button className="!text-[#000000] !p-0 !min-w-0" onClick={toggleDrawer(true)}>
        <DensityMediumIcon />
      </Button>
      <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
