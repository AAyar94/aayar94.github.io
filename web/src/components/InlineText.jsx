import React from 'react';
import PropTypes from 'prop-types';

// Renders a small subset of inline markdown (**bold** and `code`) as React
// nodes, without the block-level <p> wrapping react-markdown would add —
// safe to drop straight into a <li> or <p>.
function InlineText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);

  return parts.map((part, i) => {
    const key = `${i}-${part.slice(0, 8)}`;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={key}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

InlineText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineText;
