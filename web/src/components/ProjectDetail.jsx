import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import InlineText from './InlineText';
import { GithubIcon, ExternalIcon } from './icons';
import FallbackSpinner from './FallbackSpinner';
import MarketplaceWidget from './MarketplaceWidget';
import { useLocale, localizePath } from '../i18n/LocaleContext';
import isStaticPageHref from '../utils/staticPage';
import '../css/skills.css';
import '../css/project-detail.css';

// Small UI strings shared by every project page — kept local rather than
// duplicated across 12+ per-project data files.
const UI = {
  en: {
    techStack: 'Tech Stack',
    technologiesUsed: 'Technologies Used',
    allProjects: '← All Projects',
    notFound: 'Project not found.',
    overview: 'Overview',
    architecture: 'Architecture',
    howItWorks: 'How It Works',
    howToUse: 'How to Use',
  },
  tr: {
    techStack: 'Teknoloji Yığını',
    technologiesUsed: 'Kullanılan Teknolojiler',
    allProjects: '← Tüm Projeler',
    notFound: 'Proje bulunamadı.',
    overview: 'Genel Bakış',
    architecture: 'Mimari',
    howItWorks: 'Nasıl Çalışır',
    howToUse: 'Nasıl Kullanılır',
  },
};

function Action({ action }) {
  const icon = action.icon === 'github' ? <GithubIcon /> : action.icon === 'external' ? <ExternalIcon /> : null;
  const className = `btn-pill ${action.variant === 'primary' ? 'btn-accent' : 'btn-ghost'} project-action`;

  const isInternal = action.href.startsWith('/') && !action.external;

  if (isInternal && isStaticPageHref(action.href)) {
    // A real file in public/ (e.g. the privacy policy), so a plain navigation.
    return (
      <a className={className} href={action.href}>
        {icon}
        {action.label}
      </a>
    );
  }

  if (isInternal) {
    return (
      <Link className={className} to={action.href}>
        {icon}
        {action.label}
      </Link>
    );
  }

  return (
    <a className={className} href={action.href} target="_blank" rel="noopener noreferrer">
      {icon}
      {action.label}
    </a>
  );
}

function Section({ section, lang }) {
  return (
    <div className={`project-section ${section.reverse ? 'project-section--reverse' : ''}`}>
      {section.images?.length > 0 && (
        <div className="project-section__media project-section__media--grid">
          {section.images.map((img) => <img key={img} src={img} alt={section.imageAlt || ''} />)}
        </div>
      )}
      {!section.images && section.image && (
        <div className="project-section__media">
          <img src={section.image} alt={section.imageAlt || ''} />
        </div>
      )}
      <div className="project-section__body">
        {section.labelKey && <p className="section-label">{UI[lang][section.labelKey]}</p>}
        <h2 className="section-title">
          {section.titleBefore}
          <br />
          <span className="gradient-text">{section.titleHighlight}</span>
        </h2>
        {section.description && (
          <p className="overview-desc"><InlineText text={section.description} /></p>
        )}
        {section.features?.length > 0 && (
          <ul className="feature-list">
            {section.features.map((feature) => (
              <li key={feature} className="feature-item">
                <span className="feature-dot" />
                <InlineText text={feature} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const { lang } = useLocale();
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setData(null);
    setNotFound(false);
    fetch(localizePath(`/profile/projects/${slug}.json`, lang), { method: 'GET' })
      .then((res) => {
        if (!res.ok) throw new Error('not found');
        return res.json();
      })
      .then((res) => setData(res))
      .catch(() => setNotFound(true));
  }, [slug, lang]);

  if (notFound) {
    return (
      <div className="section-content-container project-detail">
        <p className="overview-desc">{UI[lang].notFound}</p>
        <Link to="/projects" className="back-link">{UI[lang].allProjects}</Link>
      </div>
    );
  }

  if (!data) return <FallbackSpinner />;

  return (
    <Fade triggerOnce>
      <div className="section-content-container project-detail">
        <Link to="/projects" className="back-link">{UI[lang].allProjects}</Link>

        <h1 className="proj-title"><span className="gradient-text">{data.title}</span></h1>
        {data.subtitle && <p className="proj-subtitle">{data.subtitle}</p>}

        {data.tags?.length > 0 && (
          <div className="proj-hero-tags">
            {data.tags.map((tag) => <span key={tag} className="skill-chip">{tag}</span>)}
          </div>
        )}

        {data.actions?.length > 0 && (
          <div className="proj-actions">
            {data.actions.map((action) => <Action key={action.label} action={action} />)}
          </div>
        )}

        {data.marketplace && (
          <MarketplaceWidget
            type="install"
            pluginId={data.marketplace.pluginId}
            className="marketplace-widget marketplace-widget--install"
          />
        )}

        {data.sections?.map((section) => (
          <Section key={section.titleBefore} section={section} lang={lang} />
        ))}

        {data.marketplace && (
          <MarketplaceWidget
            type="card"
            pluginId={data.marketplace.pluginId}
            className="marketplace-widget marketplace-widget--card"
          />
        )}

        {data.techStack?.length > 0 && (
          <div className="project-techstack">
            <div className="section-header">
              <p className="section-label">{UI[lang].techStack}</p>
              <h2 className="section-title">{UI[lang].technologiesUsed}</h2>
            </div>
            <div className="skill-grid">
              {data.techStack.map((item) => (
                <div key={item.title} className="skill-chip">
                  <span className="skill-chip-dot" style={{ background: item.color }} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.howToUse && (
          <div className="project-howto">
            <div className="section-header">
              <p className="section-label">{UI[lang][data.howToUse.labelKey]}</p>
              <h2 className="section-title">{data.howToUse.title}</h2>
            </div>
            <div className="project-howto__cards">
              {data.howToUse.cards.map((card) => (
                <div key={card.title} className="tile project-howto__card">
                  <h3>{card.title}</h3>
                  <ol>
                    {card.steps.map((step) => (
                      <li key={step}><InlineText text={step} /></li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default ProjectDetail;
