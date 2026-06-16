import { navItems } from '../data';

function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <button className="logo-button" onClick={() => onNavigate('home')} aria-label="Go to home page">
        <span className="logo-mark" aria-hidden="true">RL</span>
        <span>Runjie Lu</span>
      </button>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activePage === item.id ? 'page' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
