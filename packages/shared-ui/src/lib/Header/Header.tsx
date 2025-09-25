import React from 'react';
import './Header.css';

export interface HeaderProps {
  /**
   * Header title
   */
  title: string;
  /**
   * Optional subtitle
   */
  subtitle?: string;
  /**
   * Header variant
   */
  variant?: 'default' | 'dark' | 'minimal';
  /**
   * Optional logo
   */
  logo?: string;
  /**
   * Optional navigation items
   */
  navItems?: Array<{
    label: string;
    href: string;
  }>;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  variant = 'default',
  logo,
  navItems = [],
  ...props
}) => {
  return (
    <header
      className={['header', `header--${variant}`].join(' ')}
      {...props}
    >
      <div className="header__content">
        {logo && (
          <div className="header__logo">
            <img src={logo} alt="Logo" />
          </div>
        )}
        <div className="header__text">
          <h1 className="header__title">{title}</h1>
          {subtitle && <p className="header__subtitle">{subtitle}</p>}
        </div>
        {navItems.length > 0 && (
          <nav className="header__nav">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="header__nav-item"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
