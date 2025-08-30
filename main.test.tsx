// @ts-nocheck
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from 'react-router-dom';
import { Main } from './main';

// Helper function to render component with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Main Action Game Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders action game title correctly', () => {
    renderWithRouter(<Main />);
    
    expect(screen.getByText('动作游戏')).toBeInTheDocument();
  });

  it('renders button correctly', () => {
    renderWithRouter(<Main />);
    
    const button = screen.getByText('btn');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('renders image correctly', () => {
    renderWithRouter(<Main />);
    
    const image = screen.getByAltText('');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
  });

  it('handles button click and logs to console', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    renderWithRouter(<Main />);
    
    const button = screen.getByText('btn');
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith(true); // isEmpty(0) returns true
    
    consoleSpy.mockRestore();
  });

  it('has proper layout structure', () => {
    renderWithRouter(<Main />);
    
    const container = screen.getByText('动作游戏').closest('div');
    expect(container).toBeInTheDocument();
    
    const imageContainer = screen.getByAltText('').closest('div');
    expect(imageContainer).toHaveStyle({
      display: 'flex',
      gap: '6px'
    });
  });

  it('renders all main elements', () => {
    renderWithRouter(<Main />);
    
    // Check title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('动作游戏');
    
    // Check button
    expect(screen.getByRole('button')).toHaveTextContent('btn');
    
    // Check image
    expect(screen.getByTestId('img1')).toBeInTheDocument();
  });
});
