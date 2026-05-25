import { Link, useLocation } from 'wouter';

const navItems = [
  { href: '/', label: 'PROJECTS' },
  { href: '/about', label: 'ABOUT' },
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-title" aria-label="Roman Baranchuk home">
          Baranchuk Production
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? 'site-nav__link active' : 'site-nav__link'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
