/**
 * Application Color Tokens
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all colors used across the app.
 *
 * CSS custom properties (var(--color-*)) are defined in index.css
 * using these same values. To change the brand color, update BOTH
 * this file and the :root block in index.css.
 *
 * Usage in JSX (inline styles or dynamic class building):
 *   import { COLORS } from '../constants/colors';
 *   style={{ color: COLORS.primary }}
 *
 * Usage in Tailwind arbitrary-value classes:
 *   text-[var(--color-primary)]
 * ─────────────────────────────────────────────────────────────
 */

export const COLORS = {
  // ── Brand ──────────────────────────────────────────────────
  primary:      '#ff8c00', // deep orange  — main brand color
  primaryDark:  '#e07b00', // darker orange — hover / dark variant
  primaryLight: '#ffb347', // light orange  — subtle accent / highlights
  secondary:    '#ffa500', // amber-orange  — secondary accent
  accent:       '#ff6f00', // burnt orange  — strong accent

  // ── Grays (Slate scale) ────────────────────────────────────
  gray50:  '#f8fafc',
  gray100: '#f1f5f9',
  gray200: '#e2e8f0',
  gray300: '#cbd5e1',
  gray500: '#64748b',
  gray600: '#475569',
  gray700: '#334155',
  gray800: '#1e293b',
  gray900: '#0f172a',

  // ── Semantic ───────────────────────────────────────────────
  white: '#ffffff',
  black: '#000000',
};

/**
 * CSS variable name helpers — use these when building dynamic
 * Tailwind arbitrary-value classes so strings stay consistent.
 */
export const CSS_VARS = {
  primary:      'var(--color-primary)',
  primaryDark:  'var(--color-primary-dark)',
  primaryLight: 'var(--color-primary-light)',
  secondary:    'var(--color-secondary)',
  accent:       'var(--color-accent)',
  gray50:       'var(--color-gray-50)',
  gray100:      'var(--color-gray-100)',
  gray200:      'var(--color-gray-200)',
  gray300:      'var(--color-gray-300)',
  gray500:      'var(--color-gray-500)',
  gray600:      'var(--color-gray-600)',
  gray700:      'var(--color-gray-700)',
  gray800:      'var(--color-gray-800)',
  gray900:      'var(--color-gray-900)',
};
