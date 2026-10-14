import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import { useLocale, localizePath } from '../i18n/LocaleContext';
import '../css/resume.css';

const UI = {
  en: { open: 'Open', download: 'Download' },
  tr: { open: 'Aç', download: 'İndir' },
};

function Resume(props) {
  const { header } = props;
  const { lang } = useLocale();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(localizePath(endpoints.resume, lang), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, [lang]);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        {data ? (
          <Fade triggerOnce>
            <div className="bento">
              {data.intro && (
                <div className="tile resume-intro-tile span-6">
                  <p>{data.intro}</p>
                </div>
              )}
              {data.items?.map((item) => (
                <div key={item.href} className="tile tile--interactive resume-card span-2">
                  <span className="resume-card__badge">{item.badge}</span>
                  <h3 className="resume-card__title">{item.title}</h3>
                  <p className="resume-card__text">{item.description}</p>
                  <div className="resume-card__actions">
                    <a
                      className="btn-pill btn-accent"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {UI[lang].open}
                    </a>
                    <a className="btn-pill btn-ghost" href={item.href} download>
                      {UI[lang].download}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        ) : <FallbackSpinner />}
      </div>
    </>
  );
}

Resume.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Resume;
