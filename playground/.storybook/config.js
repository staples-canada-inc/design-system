import { addParameters, configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

// Storybook Config
addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);

import staplesTheme from './theme';
import '../public/css/staples-ds.css';
import '../public/css/preview-overrides.css';

addParameters({
    options: {
        isFullscreen: false,
        showNav: true,
        showPanel: false,
        panelPosition: 'bottom',
        hierarchySeparator: /\/|\./,
        hierarchyRootSeparator: /\|/,
        sidebarAnimations: true,
        enableShortcuts: true,
        isToolshown: true,
        theme: staplesTheme
    },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
