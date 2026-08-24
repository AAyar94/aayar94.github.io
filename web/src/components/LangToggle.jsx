import React from 'react';
import { useLocale } from '../i18n/LocaleContext';

function LangToggle() {
  const { lang, setLang } = useLocale();

  return (
    <div className="lang-toggle">
      {['en', 'tr'].map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-toggle__btn ${lang === code ? 'active' : ''}`}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LangToggle;
