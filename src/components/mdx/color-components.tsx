"use client";
import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ColorTextProps {
  color?: string;
  children: ReactNode;
  className?: string;
}

interface ColorBackgroundProps {
  color?: string;
  children: ReactNode;
  className?: string;
}

interface ColorBorderProps {
  color?: string;
  width?: string;
  style?: 'solid' | 'dashed' | 'dotted';
  children: ReactNode;
  className?: string;
}

// Utility function to validate and sanitize color values
const sanitizeColor = (color?: string): string => {
  if (!color) return '';
  
  // Allow hex colors, rgb/rgba, hsl/hsla, and named colors
  const colorRegex = /^(#[0-9A-Fa-f]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/;
  
  if (colorRegex.test(color.trim())) {
    return color.trim();
  }
  
  return '';
};

// Check if color has good contrast against background
const hasGoodContrast = (color: string): boolean => {
  // Simple heuristic - check if it's a very light color that might be hard to read
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    if (hex.length === 3) {
      const expandedHex = hex.split('').map(char => char + char).join('');
      const rgb = parseInt(expandedHex, 16);
      const r = (rgb >> 16) & 255;
      const g = (rgb >> 8) & 255;
      const b = rgb & 255;
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness < 200; // Avoid very bright colors
    }
  }
  return true; // Default to allowing the color
};

export const ColorText: React.FC<ColorTextProps> = ({ 
  color, 
  children, 
  className 
}) => {
  const sanitizedColor = sanitizeColor(color);
  
  if (!sanitizedColor) {
    return <span className={className}>{children}</span>;
  }

  const style: React.CSSProperties = {
    color: sanitizedColor,
  };

  // Add text shadow for better readability on light colors
  if (!hasGoodContrast(sanitizedColor)) {
    style.textShadow = '0 0 2px rgba(0,0,0,0.5)';
  }

  return (
    <span 
      className={clsx('transition-colors duration-200', className)}
      style={style}
    >
      {children}
    </span>
  );
};

export const ColorBackground: React.FC<ColorBackgroundProps> = ({ 
  color, 
  children, 
  className 
}) => {
  const sanitizedColor = sanitizeColor(color);
  
  if (!sanitizedColor) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span 
      className={clsx('px-1 py-0.5 rounded transition-colors duration-200', className)}
      style={{ backgroundColor: sanitizedColor }}
    >
      {children}
    </span>
  );
};

export const ColorBorder: React.FC<ColorBorderProps> = ({ 
  color, 
  width = '2px',
  style = 'solid',
  children, 
  className 
}) => {
  const sanitizedColor = sanitizeColor(color);
  
  if (!sanitizedColor) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span 
      className={clsx('inline-block px-2 py-1 transition-colors duration-200', className)}
      style={{ 
        border: `${width} ${style} ${sanitizedColor}`,
        borderRadius: '4px'
      }}
    >
      {children}
    </span>
  );
};

// Preset color components for common use cases
export const RedText: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <ColorText color="#dc2626" className={className}>{children}</ColorText>
);

export const BlueText: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <ColorText color="#2563eb" className={className}>{children}</ColorText>
);

export const GreenText: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <ColorText color="#16a34a" className={className}>{children}</ColorText>
);

export const YellowText: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <ColorText color="#ca8a04" className={className}>{children}</ColorText>
);

export const PurpleText: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <ColorText color="#9333ea" className={className}>{children}</ColorText>
);

export const OrangeText: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <ColorText color="#ea580c" className={className}>{children}</ColorText>
);

// Highlight component for background colors
export const Highlight: React.FC<{ color?: string; children: ReactNode; className?: string }> = ({ 
  color = "#fef08a", 
  children, 
  className 
}) => (
  <ColorBackground color={color} className={clsx('font-medium', className)}>
    {children}
  </ColorBackground>
);