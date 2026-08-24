import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/LocaleContext';

const VIEW_DETAILS = { en: 'View details', tr: 'Detayları gör' };

const ProjectCard = ({ project, featured = false }) => {
  const { lang } = useLocale();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`tile tile--interactive project-card ${
        featured ? 'span-4 project-card--featured' : 'span-2'
      }`}
    >
      {project?.image && (
        <div className="project-card__media">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__text">{project.bodyText}</p>
      </div>

      <div className="project-card__footer">
        {project?.tags?.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
        <span className="proj-link">
          {VIEW_DETAILS[lang]}
          {' '}
          ↗
        </span>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  featured: PropTypes.bool,
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
