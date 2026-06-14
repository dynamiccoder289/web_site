import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock all pages to keep tests fast and focused
vi.mock('../pages/Home', () => ({ default: () => <div>Home Page</div> }));
vi.mock('../pages/About', () => ({ default: () => <div>About Page</div> }));
vi.mock('../pages/Contact', () => ({ default: () => <div>Contact Page</div> }));
vi.mock('../pages/Services', () => ({ default: () => <div>Services Page</div> }));
vi.mock('../pages/TheFirm', () => ({ default: () => <div>The Firm Page</div> }));
vi.mock('../pages/OurValues', () => ({ default: () => <div>Our Values Page</div> }));
vi.mock('../pages/Leadership', () => ({ default: () => <div>Leadership Page</div> }));
vi.mock('../pages/AuditAssurance', () => ({ default: () => <div>Audit Assurance Page</div> }));
vi.mock('../pages/TaxRegulatory', () => ({ default: () => <div>Tax Regulatory Page</div> }));
vi.mock('../pages/BusinessAdvisory', () => ({ default: () => <div>Business Advisory Page</div> }));
vi.mock('../pages/Partners', () => ({ default: () => <div>Partners Page</div> }));
vi.mock('../pages/OurTeam', () => ({ default: () => <div>Our Team Page</div> }));
vi.mock('../pages/Experience', () => ({ default: () => <div>Experience Page</div> }));

// Mock Navbar and Footer to isolate routing tests
vi.mock('../components/Navbar', () => ({ default: () => <nav data-testid="navbar">Navbar</nav> }));
vi.mock('../components/Footer', () => ({ default: () => <footer data-testid="footer">Footer</footer> }));

// App already contains <BrowserRouter> — render it directly without wrapping
describe('App', () => {
  it('renders the Navbar', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders Home page at the default route', () => {
    render(<App />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders a main content area', () => {
    render(<App />);
    expect(document.querySelector('main')).toBeInTheDocument();
  });

  it('renders the outer layout wrapper', () => {
    render(<App />);
    const wrapper = document.querySelector('.min-h-screen');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders Navbar inside layout', () => {
    render(<App />);
    const navbar = screen.getByTestId('navbar');
    expect(navbar.tagName.toLowerCase()).toBe('nav');
  });
});
