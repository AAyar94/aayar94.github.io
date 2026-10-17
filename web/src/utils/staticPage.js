// Pages shipped as real files in public/ (the Chronix privacy policy, the
// Smart Code Sorter license) are not SPA routes. Linking to them with a router
// <Link> keeps the navigation client-side, where the legacy "/:slug.html" alias
// route in MainApp catches the URL and renders "Project not found". They need a
// normal browser navigation so the file is served.
export default function isStaticPageHref(href) {
  return /^\/[^?#]*\.html(?:[?#].*)?$/.test(href);
}
