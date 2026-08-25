import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const LocaleContext = createContext({ lang: 'en', setLang: () => {} });

const SUPPORTED_LANGS = ['en', 'tr'];
const FALLBACK_LANG = 'en';

// Falls back to English when the browser reports a language we don't ship.
function detectBrowserLang() {
  try {
    const candidates = window.navigator.languages && window.navigator.languages.length
      ? window.navigator.languages
      : [window.navigator.language];

    const match = candidates
      .map((tag) => tag?.split('-')[0]?.toLowerCase())
      .find((code) => SUPPORTED_LANGS.includes(code));

    return match || FALLBACK_LANG;
  } catch {
    return FALLBACK_LANG;
  }
}

// localStorage can be unavailable (test environments, restrictive browser
// contexts) — read/write defensively rather than letting it crash the app.
// A previously chosen language always wins; only a first-time visitor gets
// the browser/device language, with English as the fallback.
function readStoredLang() {
  try {
    const stored = window.localStorage.getItem('lang');
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    return detectBrowserLang();
  } catch {
    return detectBrowserLang();
  }
}

function writeStoredLang(lang) {
  try {
    window.localStorage.setItem('lang', lang);
  } catch {
    // ignore — locale just won't persist across visits
  }
}

export function LocaleProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    writeStoredLang(lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLocale() {
  return useContext(LocaleContext);
}

// Data files are English by default (e.g. "profile/home.json"); a non-English
// locale is served from a sibling file (e.g. "profile/home.tr.json").
export function localizePath(path, lang) {
  if (lang === 'en') return path;
  return path.replace(/\.json$/, `.${lang}.json`);
}
