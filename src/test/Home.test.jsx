import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

// Mock HOME_SLIDES constant with predictable test data
vi.mock('../constants/homeConstants', () => ({
  HOME_SLIDES: [
    {
      title: 'Excellence in Accounting',
      subtitle: 'Trusted chartered accountants since 1990.',
      cta: 'Learn More',
      ctaTarget: 'about',
      image: '/test-slide-1.jpg',
    },
    {
      title: 'Tax & Regulatory',
      subtitle: 'Comprehensive tax advisory services.',
      cta: 'Our Services',
      ctaTarget: 'services',
      image: '/test-slide-2.jpg',
    },
  ],
}));

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

describe('Home', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockNavigate.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the first slide title on load', () => {
    renderHome();
    expect(screen.getByText('Excellence in Accounting')).toBeInTheDocument();
  });

  it('renders the first slide subtitle', () => {
    renderHome();
    expect(screen.getByText('Trusted chartered accountants since 1990.')).toBeInTheDocument();
  });

  it('renders the CTA button for the first slide', () => {
    renderHome();
    expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
  });

  it('renders previous and next navigation buttons', () => {
    renderHome();
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
  });

  it('renders slide indicator buttons', () => {
    renderHome();
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
  });

  it('navigates to the correct route when CTA is clicked', () => {
    renderHome();
    fireEvent.click(screen.getByRole('button', { name: 'Learn More' }));
    expect(mockNavigate).toHaveBeenCalledWith('/about');
  });
});
