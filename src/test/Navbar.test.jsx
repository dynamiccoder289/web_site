import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Helper to render Navbar inside a router
const renderNavbar = (initialPath = '/') =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navbar />
    </MemoryRouter>
  );

describe('Navbar', () => {
  it('renders the company name', () => {
    renderNavbar();
    expect(screen.getByText('SOMASEKHARA & ASSOCIATES')).toBeInTheDocument();
  });

  it('renders the "Chartered Accountants" subtitle', () => {
    renderNavbar();
    expect(screen.getByText('Chartered Accountants')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    renderNavbar();
    const logo = screen.getByAltText('Somasekhara & Associates Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.png');
  });

  it('renders the "Book Consultation" CTA button', () => {
    renderNavbar();
    expect(screen.getByText('Book Consultation')).toBeInTheDocument();
  });

  it('renders all top-level nav items', () => {
    renderNavbar();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('shows mobile menu toggle button', () => {
    renderNavbar();
    // The hamburger icon button has class "lg:hidden" — no accessible text label
    const menuBtn = screen.getAllByRole('button').find(
      (btn) => btn.className.includes('lg:hidden')
    );
    expect(menuBtn).toBeTruthy();
  });

  it('toggles mobile menu open and closed', () => {
    renderNavbar();
    const menuBtn = screen.getAllByRole('button').find(
      (btn) => btn.className.includes('lg:hidden')
    );
    expect(menuBtn).toBeTruthy();
    fireEvent.click(menuBtn);
    // After opening, "Book Consultation" appears twice (desktop + mobile)
    const ctaBtns = screen.getAllByText('Book Consultation');
    expect(ctaBtns.length).toBeGreaterThanOrEqual(2);
    // Close menu
    fireEvent.click(menuBtn);
  });

  it('shows contact info in mobile menu when open', () => {
    renderNavbar();
    const menuBtn = screen.getAllByRole('button').find(
      (btn) => btn.className.includes('lg:hidden')
    );
    fireEvent.click(menuBtn);
    expect(screen.getByText('+91-9533680345')).toBeInTheDocument();
    expect(screen.getByText('ca@somasekhara.com')).toBeInTheDocument();
  });
});
