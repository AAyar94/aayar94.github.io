import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';
import { useLocale, localizePath } from '../i18n/LocaleContext';
import '../css/projects.css';

const SHOW_MORE = { en: 'Show more', tr: 'Daha fazla göster' };

const Projects = (props) => {
  const { header } = props;
  const { lang } = useLocale();
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(localizePath(endpoints.projects, lang), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, [lang]);

  const numberOfItems = showMore && data ? data.projects.length : 6;

  return (
    <>
      <Header title={header} />
      {data ? (
        <div className="section-content-container">
          <Fade triggerOnce>
            <div className="bento">
              {data.projects?.slice(0, numberOfItems).map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  featured={index === 0}
                />
              ))}
            </div>
          </Fade>

          {!showMore && data.projects?.length > numberOfItems && (
            <div className="projects-more">
              <button
                type="button"
                className="btn-pill btn-ghost"
                onClick={() => setShowMore(true)}
              >
                {SHOW_MORE[lang]}
              </button>
            </div>
          )}
        </div>
      ) : <FallbackSpinner /> }
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
