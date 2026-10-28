import React, { useEffect, useId, useRef } from 'react';
import PropTypes from 'prop-types';

const SCRIPT_SRC = 'https://plugins.jetbrains.com/assets/scripts/mp-widget.js';

let scriptPromise;

// The JetBrains script is shared by every widget on the page, so it is
// injected once and reused. A failed load is not cached, so a later mount
// can retry.
function loadScript() {
  if (window.MarketplaceWidget) return Promise.resolve(window.MarketplaceWidget);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve(window.MarketplaceWidget);
      script.onerror = () => {
        scriptPromise = undefined;
        script.remove();
        reject(new Error('JetBrains Marketplace widget failed to load'));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

// Embeds a JetBrains Marketplace widget ("card" or "install") for a plugin.
// The widget script renders into an element found by CSS selector, hence the
// generated id.
function MarketplaceWidget({ type, pluginId, className }) {
  const reactId = useId();
  const id = `mp-widget-${type}-${reactId.replace(/:/g, '')}`;
  const ref = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const container = ref.current;

    loadScript()
      .then((widget) => {
        if (!cancelled) widget.setupMarketplaceWidget(type, pluginId, `#${id}`);
      })
      .catch(() => {
        // The widget is a nicety; the Marketplace link button still works.
      });

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, [type, pluginId, id]);

  return <div id={id} ref={ref} className={className} />;
}

MarketplaceWidget.propTypes = {
  type: PropTypes.oneOf(['card', 'install']).isRequired,
  pluginId: PropTypes.number.isRequired,
  className: PropTypes.string,
};

MarketplaceWidget.defaultProps = {
  className: undefined,
};

export default MarketplaceWidget;
