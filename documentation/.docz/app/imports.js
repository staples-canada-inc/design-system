export const imports = {
  'pages/accessibility.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-accessibility" */ 'pages/accessibility.mdx'
    ),
  'pages/colours.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-colours" */ 'pages/colours.mdx'
    ),
  'pages/introduction.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-introduction" */ 'pages/introduction.mdx'
    ),
  'components/Alerts/alerts.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-alerts-alerts" */ 'components/Alerts/alerts.mdx'
    ),
  'components/Badge/badges.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-badge-badges" */ 'components/Badge/badges.mdx'
    ),
  'components/Button/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-button-button" */ 'components/Button/button.mdx'
    ),
  'components/Checkbox/checkboxes.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-checkbox-checkboxes" */ 'components/Checkbox/checkboxes.mdx'
    ),
  'components/Radio/radios.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-radio-radios" */ 'components/Radio/radios.mdx'
    ),
  'components/Spinners/spinners.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-spinners-spinners" */ 'components/Spinners/spinners.mdx'
    ),
  'components/Text-Input/text_inputs.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-text-input-text-inputs" */ 'components/Text-Input/text_inputs.mdx'
    ),
  'components/Toggles/toggles.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-toggles-toggles" */ 'components/Toggles/toggles.mdx'
    ),
}
