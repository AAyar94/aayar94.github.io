import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import { useLocale, localizePath } from '../i18n/LocaleContext';
import '../css/home.css';

function initialsOf(name) {
  if (!name) return '';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function Home() {
  const { lang } = useLocale();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(localizePath(endpoints.home, lang), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, [lang]);

  return data ? (
    <Fade triggerOnce className="home-fade-container">
      <section className="hero">
        <div className="bento">
          <div className="tile hero-intro span-4 rspan-2">
            {data?.status && (
              <span className="hero-eyebrow">{data.status}</span>
            )}
            <h1 className="hero-name">{data?.name}</h1>
            <div className="hero-roles">
              {data?.imWord && <span>{data.imWord}&nbsp;</span>}
              <Typewriter
                key={lang}
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </div>
            {data?.tagline && <p className="hero-tagline">{data.tagline}</p>}
            <div className="hero-cta">
              <Link className="btn-pill btn-accent" to="/projects">
                {data?.viewMyWork ?? 'View my work'}
              </Link>
              <Link className="btn-pill btn-ghost" to="/about">
                {data?.aboutMe ?? 'About me'}
              </Link>
            </div>
          </div>

          <div className="tile tile--accent monogram span-2">
            <span className="monogram-mark">{initialsOf(data?.name)}</span>
            <span className="monogram-label">{data?.name}</span>
          </div>

          <div className="tile hero-social span-2">
            <span className="tile-label">{data?.findMe ?? 'Find me'}</span>
            <Social />
          </div>
        </div>
      </section>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
