import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import endpoints from './constants/endpoints';
import { useLocale, localizePath } from './i18n/LocaleContext';

function MainApp() {
  const { lang } = useLocale();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(localizePath(endpoints.routes, lang), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, [lang]);

  return (
    <div className="MainApp">
      <NavBar />
      <main className="main">
        <Suspense fallback={<FallbackSpinner />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {data
              && data.sections.map((route) => {
                const SectionComponent = React.lazy(() => import(`./components/${route.component}.jsx`));
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<SectionComponent header={route.headerTitle} />}
                  />
                );
              })}
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            {/* Legacy aliases: the site used to serve one static *.html page per
                project, and those exact URLs may be linked from app store
                listings or elsewhere, so they keep working. */}
            <Route path="/:slug.html" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default MainApp;
