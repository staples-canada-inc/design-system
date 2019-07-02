export const imports = {
  'LICENSE.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "license" */ 'LICENSE.md'
    ),
  'pages/accessibility.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-accessibility" */ 'pages/accessibility.mdx'
    ),
  'pages/alerts.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-alerts" */ 'pages/alerts.mdx'
    ),
  'pages/badges.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-badges" */ 'pages/badges.mdx'
    ),
  'pages/checkboxes.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-checkboxes" */ 'pages/checkboxes.mdx'
    ),
  'pages/colours.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-colours" */ 'pages/colours.mdx'
    ),
  'pages/introduction.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-introduction" */ 'pages/introduction.mdx'
    ),
  'pages/radios.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-radios" */ 'pages/radios.mdx'
    ),
  'pages/spinners.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-spinners" */ 'pages/spinners.mdx'
    ),
  'pages/text_inputs.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-text-inputs" */ 'pages/text_inputs.mdx'
    ),
  'pages/toggles.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-toggles" */ 'pages/toggles.mdx'
    ),
}
