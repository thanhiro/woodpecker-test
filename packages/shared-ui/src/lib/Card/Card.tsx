import React from 'react';
import './Card.css';

export interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card variant
   */
  variant?: 'default' | 'elevated' | 'outlined';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Card size
   */
  size?: 'small' | 'medium' | 'large';
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  onClick,
  size = 'medium',
  ...props
}) => {
  return (
    <div
      className={['card', `card--${variant}`, `card--${size}`].join(' ')}
      onClick={onClick}
      {...props}
    >
      {title && <div className="card__title">{title}</div>}
      <div className="card__content">{children}</div>
    </div>
  );
};
