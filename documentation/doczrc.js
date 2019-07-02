import fs from "fs"
import * as path from 'path'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
    title: 'Staples Design System',
    description: 'It has never been so easy to document your things',
    indexHtml: 'public/index.html',
    theme: 'src/theme/index',
    codeSandbox: false,
    typescript: true,
    propsParser: false,
    mdPlugins: [externalLinks],
    ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
    public: './public',
    themeConfig: {
        mode: 'light',
        logo: {
            src: '/public/images/Staples_Logo_EN.svg',
            alt: 'Staples Design System',
            width: 150
        }
    },
    htmlContext: {
        favicon: '/public/images/favicon.png',
        head: {
            raw: `<style>${fs.readFileSync(
                process.cwd() + "/public/css/staples-ds.css"
            )}</style>`
        }
    },
    menu: [

    ],
    onCreateWebpackChain: config => {
        config.resolve.alias
            .set('@fonts', `${PUBLIC}/fonts`)
            .set('@images', `${PUBLIC}/images`)
            .set('@components', `${SRC}/theme/components`)
            .set('@styles', `${SRC}/theme/styles`)

        return config
    },
}
