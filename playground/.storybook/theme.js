import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: '#cc0000',
    colorSecondary: '#198294',

    // UI
    appBg: '#FFF',
    appContentBg: '#FFF',
    appBorderColor: '#D9D9D6',
    appBorderRadius: 0,

    // Typography
    fontBase: '"TT Norms", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#444',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#444',
    barSelectedColor: '#198294',
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: '#444',
    inputBorderRadius: 0,

    brandTitle: 'Staples Design System - React',
    brandUrl: '/',
    //brandImage: '//cdn.shopify.com/s/files/1/0036/4806/1509/files/logo-english_300x@2x.png?3596753',
    gridCellSize: 30
});