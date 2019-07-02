import facepaint from 'facepaint'

export const breakpoints = {
  mobile: 567,
  tablet: 768,
  desktop: 1200,
}

export const mq = facepaint([
  `@media(min-width: ${breakpoints.mobile}px)`,
  `@media(min-width: ${breakpoints.tablet}px)`,
  `@media(min-width: ${breakpoints.desktop}px)`,
])
