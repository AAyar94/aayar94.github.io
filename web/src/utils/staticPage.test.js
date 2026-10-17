import { describe, it, expect } from 'vitest';
import isStaticPageHref from './staticPage';

describe('isStaticPageHref', () => {
  it('recognises root-relative .html files', () => {
    expect(isStaticPageHref('/chronix-privacy-policy.html')).toBe(true);
    expect(isStaticPageHref('/chronix-privacy-policy.tr.html')).toBe(true);
    expect(isStaticPageHref('/smartcodesorter-license.html')).toBe(true);
    expect(isStaticPageHref('/chronix-privacy-policy.html#cookies')).toBe(true);
  });

  it('leaves real SPA routes and external links alone', () => {
    expect(isStaticPageHref('/projects')).toBe(false);
    expect(isStaticPageHref('/projects/chronix')).toBe(false);
    expect(isStaticPageHref('/tr/projects')).toBe(false);
    expect(isStaticPageHref('https://example.com/page.html')).toBe(false);
    expect(isStaticPageHref('mailto:someone@example.com')).toBe(false);
  });
});
