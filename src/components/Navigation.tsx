import { Link, useLocation } from 'wouter';

const navItems = [
  { href: '/', label: 'Проєкти' },
  { href: '/about', label: 'Про мене' },
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="brand-link" aria-label="Baranchuk Productions home">
          <span className="brand-mark">BP</span>
          <span>Baranchuk Productions</span>
        </Link>

        <div className="nav-links" aria-label="Головна навігація">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
