import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const LocaleContext = createContext({ lang: 'en', setLang: () => {} });

// localStorage can be unavailable (test environments, restrictive browser
// contexts) — read/write defensively rather than letting it crash the app.
function readStoredLang() {
  try {
    return window.localStorage.getItem('lang') || 'en';
  } catch {
    return 'en';
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
