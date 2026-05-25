import { Link, useLocation } from 'wouter';

const navItems = [
  { href: '/', label: 'ПРОЄКТИ', match: '/' },
  { href: '/about', label: 'ПРО МЕНЕ', match: '/about' },
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-title" aria-label="Головна Baranchuk Production">
          Baranchuk Production
        </Link>

        <nav className="site-nav" aria-label="Головна навігація">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.match ? 'site-nav__link active' : 'site-nav__link'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
