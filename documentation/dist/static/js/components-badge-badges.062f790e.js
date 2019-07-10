(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./components/Badge/badges.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return r});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),d=n("./node_modules/docz/dist/index.esm.js"),t=n("./node_modules/reactstrap/es/Badge.js"),i=n("./node_modules/reactstrap/es/Button.js"),l={},c="wrapper";function r(e){var a=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)(c,Object.assign({},l,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"badges"},"Badges"),Object(o.b)("p",null,"Badges scale to match the size of the immediate parent element by using relative font sizing and ",Object(o.b)("inlineCode",{parentName:"p"},"em")," units.\nBadges can be used as part of links or buttons to provide a counter."),Object(o.b)("h2",{id:"scale-to-parent"},"Scale to Parent"),Object(o.b)(d.c,{__position:0,__code:'<h1>\n  Heading <Badge color="secondary">New</Badge>\n</h1>\n<h2>\n  Heading <Badge color="secondary">New</Badge>\n</h2>\n<h3>\n  Heading <Badge color="secondary">New</Badge>\n</h3>\n<h4>\n  Heading <Badge color="secondary">New</Badge>\n</h4>',__scope:{props:this?this.props:n,Playground:d.c,Props:d.d,Badge:t.a,Button:i.a},mdxType:"Playground"},Object(o.b)("h1",null,"Heading ",Object(o.b)(t.a,{color:"secondary",mdxType:"Badge"},"New")),Object(o.b)("h2",null,"Heading ",Object(o.b)(t.a,{color:"secondary",mdxType:"Badge"},"New")),Object(o.b)("h3",null,"Heading ",Object(o.b)(t.a,{color:"secondary",mdxType:"Badge"},"New")),Object(o.b)("h4",null,"Heading ",Object(o.b)(t.a,{color:"secondary",mdxType:"Badge"},"New"))),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<h1>Example heading <span class="badge badge-secondary">New</span></h1>\n<h2>Example heading <span class="badge badge-secondary">New</span></h2>\n<h3>Example heading <span class="badge badge-secondary">New</span></h3>\n<h4>Example heading <span class="badge badge-secondary">New</span></h4>\n<h5>Example heading <span class="badge badge-secondary">New</span></h5>\n<h6>Example heading <span class="badge badge-secondary">New</span></h6>\n')),Object(o.b)("p",null,"Badges can be used as part of links or buttons to provide a counter."),Object(o.b)("h2",{id:"notification"},"Notification"),Object(o.b)(d.c,{__position:1,__code:'<Button color="primary" outline>\n  Notifications <Badge color="primary">4</Badge>\n</Button>',__scope:{props:this?this.props:n,Playground:d.c,Props:d.d,Badge:t.a,Button:i.a},mdxType:"Playground"},Object(o.b)(i.a,{color:"primary",outline:!0,mdxType:"Button"},"Notifications ",Object(o.b)(t.a,{color:"primary",mdxType:"Badge"},"4"))),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary">\n    Profile <span class="badge badge-light">9</span>\n    <span class="sr-only">unread messages</span>\n</button>\n')),Object(o.b)("p",null,"Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button."),Object(o.b)("p",null,"Unless the context is clear (as with the \u201cNotifications\u201d example, where it is understood that the ",Object(o.b)("inlineCode",{parentName:"p"},"\u201c4\u201d")," is the number of notifications), consider including additional context with a visually hidden piece of additional text."),Object(o.b)("h2",{id:"contextual-variations"},"Contextual variations"),Object(o.b)("p",null,"Add any of the modifier classes to change the appearance of a badge."),Object(o.b)("p",null,"Conveying meaning to assistive technologies\nUsing color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ",Object(o.b)("inlineCode",{parentName:"p"},".sr-only")," class."),Object(o.b)("h3",{id:"pill-badges"},"Pill badges"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},".badge-pill")," modifier class to make badges more rounded (with a larger ",Object(o.b)("inlineCode",{parentName:"p"},"border-radius")," and additional horizontal ",Object(o.b)("inlineCode",{parentName:"p"},"padding"),")."),Object(o.b)(d.c,{__position:2,__code:'<Badge color="primary" className="mr-2" pill>\n  Primary\n</Badge>\n<Badge color="secondary" className="mr-2" pill>\n  Secondary\n</Badge>\n<Badge color="success" className="mr-2" pill>\n  Success\n</Badge>\n<Badge color="danger" className="mr-2" pill>\n  Danger\n</Badge>\n<Badge color="warning" className="mr-2" pill>\n  Warning\n</Badge>\n<Badge color="info" className="mr-2" pill>\n  Info\n</Badge>\n<Badge color="light" className="mr-2" pill>\n  Light\n</Badge>\n<Badge color="dark" className="mr-2" pill>\n  Dark\n</Badge>',__scope:{props:this?this.props:n,Playground:d.c,Props:d.d,Badge:t.a,Button:i.a},mdxType:"Playground"},Object(o.b)(t.a,{color:"primary",className:"mr-2",pill:!0,mdxType:"Badge"},"Primary"),Object(o.b)(t.a,{color:"secondary",className:"mr-2",pill:!0,mdxType:"Badge"},"Secondary"),Object(o.b)(t.a,{color:"success",className:"mr-2",pill:!0,mdxType:"Badge"},"Success"),Object(o.b)(t.a,{color:"danger",className:"mr-2",pill:!0,mdxType:"Badge"},"Danger"),Object(o.b)(t.a,{color:"warning",className:"mr-2",pill:!0,mdxType:"Badge"},"Warning"),Object(o.b)(t.a,{color:"info",className:"mr-2",pill:!0,mdxType:"Badge"},"Info"),Object(o.b)(t.a,{color:"light",className:"mr-2",pill:!0,mdxType:"Badge"},"Light"),Object(o.b)(t.a,{color:"dark",className:"mr-2",pill:!0,mdxType:"Badge"},"Dark")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<span class="badge badge-primary badge-pill">Primary</span>\n<span class="badge badge-secondary badge-pill">Secondary</span>\n<span class="badge badge-success badge-pill">Success</span>\n<span class="badge badge-danger badge-pill">Danger</span>\n<span class="badge badge-warning badge-pill">Warning</span>\n<span class="badge badge-info badge-pill">Info</span>\n<span class="badge badge-light badge-pill">Light</span>\n<span class="badge badge-dark badge-pill">Dark</span>\n')))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Badge/badges.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=components-badge-badges.54fc6a167dfe2e3d16e3.js.map