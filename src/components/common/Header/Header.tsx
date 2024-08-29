import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { DrawerMenu } from '@/components/ui/Drawer';
import { headerItems } from '@/mock/header';

interface HeaderProps {
  position?: string;
}

interface HeaderNavProps {
  items: { text: string; href?: string }[];
  className?: string;
}
const cx = classNames.bind(styles);

const drawerItems = headerItems.map(({ text }) => ({ text }));

const HeaderNav: React.FC<HeaderNavProps> = ({ items, className }) => (
  <ul className={cx(className)}>
    {items.map(({ text, href }, index) => (
      <li key={index} className={cx('mr-4', 'header-font')}>
        {href ? <a href={href}>{text}</a> : text}
      </li>
    ))}
  </ul>
);

const Header: React.FC<HeaderProps> = ({ position }) => {
  return (
    <header
      className={cx(
        'header',
        'flex items-center justify-between',
        position === 'Sidebar' ? 'fixed top-0 left-0 right-0 z-10' : '',
      )}
    >
      <HeaderNav items={headerItems.slice(0, 2)} className="hidden md:flex items-center" />
      <a href="/" className={cx('header-title', 'text-xl md:text-4xl')}>
        Linh & Yen
      </a>
      <DrawerMenu anchor="right" items={drawerItems} />
      <HeaderNav items={headerItems.slice(2)} className="hidden md:flex items-center" />
    </header>
  );
};

export default Header;
