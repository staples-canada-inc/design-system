(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./components/Badge/badges.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return l});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),o=n("./node_modules/reactstrap/es/Badge.js"),t=n("./node_modules/reactstrap/es/Button.js"),c={},i="wrapper";function l(e){var a=e.components,n=Object(s.a)(e,["components"]);return Object(d.b)(i,Object.assign({},c,n,{components:a,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"badges"},"Badges"),Object(d.b)("p",null,"Badges scale to match the size of the immediate parent element by using relative font sizing and ",Object(d.b)("inlineCode",{parentName:"p"},"em")," units.\nBadges can be used as part of links or buttons to provide a counter."),Object(d.b)("h2",{id:"scale-to-parent"},"Scale to Parent"),Object(d.b)(r.c,{__position:0,__code:'<h1>\n  Heading <Badge color="secondary">New</Badge>\n</h1>\n<h2>\n  Heading <Badge color="secondary">New</Badge>\n</h2>\n<h3>\n  Heading <Badge color="secondary">New</Badge>\n</h3>\n<h4>\n  Heading <Badge color="secondary">New</Badge>\n</h4>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Badge:o.a,Button:t.a},mdxType:"Playground"},Object(d.b)("h1",null,"Heading ",Object(d.b)(o.a,{color:"secondary",mdxType:"Badge"},"New")),Object(d.b)("h2",null,"Heading ",Object(d.b)(o.a,{color:"secondary",mdxType:"Badge"},"New")),Object(d.b)("h3",null,"Heading ",Object(d.b)(o.a,{color:"secondary",mdxType:"Badge"},"New")),Object(d.b)("h4",null,"Heading ",Object(d.b)(o.a,{color:"secondary",mdxType:"Badge"},"New"))),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{}),'<h1>Example heading <span class="badge badge-secondary">New</span></h1>\n<h2>Example heading <span class="badge badge-secondary">New</span></h2>\n<h3>Example heading <span class="badge badge-secondary">New</span></h3>\n<h4>Example heading <span class="badge badge-secondary">New</span></h4>\n<h5>Example heading <span class="badge badge-secondary">New</span></h5>\n<h6>Example heading <span class="badge badge-secondary">New</span></h6>\n')),Object(d.b)("h2",{id:"notification"},"Notification"),Object(d.b)("p",null,"Badges can be used as part of links or buttons to provide a counter."),Object(d.b)(r.c,{__position:1,__code:'<Button color="primary" outline>\n  Notifications <Badge color="primary">4</Badge>\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Badge:o.a,Button:t.a},mdxType:"Playground"},Object(d.b)(t.a,{color:"primary",outline:!0,mdxType:"Button"},"Notifications ",Object(d.b)(o.a,{color:"primary",mdxType:"Badge"},"4"))),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary">\n    Notifications <span class="ml-2 badge badge-primary">4</span>\n</button>\n')),Object(d.b)("p",null,"Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button."),Object(d.b)("p",null,"Unless the context is clear (as with the \u201cNotifications\u201d example, where it is understood that the ",Object(d.b)("inlineCode",{parentName:"p"},"\u201c4\u201d")," is the number of notifications), consider including additional context with a visually hidden piece of additional text."),Object(d.b)("h2",{id:"contextual-variations"},"Contextual variations"),Object(d.b)("p",null,"Add any of the modifier classes to change the appearance of a badge."),Object(d.b)("p",null,"Conveying meaning to assistive technologies\nUsing color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ",Object(d.b)("inlineCode",{parentName:"p"},".sr-only")," class."),Object(d.b)("h3",{id:"pill-badges"},"Pill badges"),Object(d.b)("p",null,"Use the ",Object(d.b)("inlineCode",{parentName:"p"},".badge-pill")," modifier class to make badges more rounded (with a larger ",Object(d.b)("inlineCode",{parentName:"p"},"border-radius")," and additional horizontal ",Object(d.b)("inlineCode",{parentName:"p"},"padding"),")."),Object(d.b)(r.c,{__position:2,__code:'<Badge color="primary" className="mr-2" pill>\n  Primary\n</Badge>\n<Badge color="secondary" className="mr-2" pill>\n  Secondary\n</Badge>\n<Badge color="success" className="mr-2" pill>\n  Success\n</Badge>\n<Badge color="danger" className="mr-2" pill>\n  Danger\n</Badge>\n<Badge color="warning" className="mr-2" pill>\n  Warning\n</Badge>\n<Badge color="info" className="mr-2" pill>\n  Info\n</Badge>\n<Badge color="light" className="mr-2" pill>\n  Light\n</Badge>\n<Badge color="dark" className="mr-2" pill>\n  Dark\n</Badge>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Badge:o.a,Button:t.a},mdxType:"Playground"},Object(d.b)(o.a,{color:"primary",className:"mr-2",pill:!0,mdxType:"Badge"},"Primary"),Object(d.b)(o.a,{color:"secondary",className:"mr-2",pill:!0,mdxType:"Badge"},"Secondary"),Object(d.b)(o.a,{color:"success",className:"mr-2",pill:!0,mdxType:"Badge"},"Success"),Object(d.b)(o.a,{color:"danger",className:"mr-2",pill:!0,mdxType:"Badge"},"Danger"),Object(d.b)(o.a,{color:"warning",className:"mr-2",pill:!0,mdxType:"Badge"},"Warning"),Object(d.b)(o.a,{color:"info",className:"mr-2",pill:!0,mdxType:"Badge"},"Info"),Object(d.b)(o.a,{color:"light",className:"mr-2",pill:!0,mdxType:"Badge"},"Light"),Object(d.b)(o.a,{color:"dark",className:"mr-2",pill:!0,mdxType:"Badge"},"Dark")),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{}),'<span class="badge badge-primary badge-pill">Primary</span>\n<span class="badge badge-secondary badge-pill">Secondary</span>\n<span class="badge badge-success badge-pill">Success</span>\n<span class="badge badge-danger badge-pill">Danger</span>\n<span class="badge badge-warning badge-pill">Warning</span>\n<span class="badge badge-info badge-pill">Info</span>\n<span class="badge badge-light badge-pill">Light</span>\n<span class="badge badge-dark badge-pill">Dark</span>\n')),Object(d.b)("h3",{id:"links"},"Links"),Object(d.b)("p",null,"Using the contextual ",Object(d.b)("inlineCode",{parentName:"p"},".badge-*")," classes on an ",Object(d.b)("inlineCode",{parentName:"p"},"<a>")," element quickly provides actionable badges with hover and focus states."),Object(d.b)(r.c,{__position:3,__code:'<a href="#" className="mr-2 badge badge-primary">\n  Primary\n</a>\n<a href="#" className="mr-2 badge badge-secondary">\n  Secondary\n</a>\n<a href="#" className="mr-2 badge badge-success">\n  Success\n</a>\n<a href="#" className="mr-2 badge badge-danger">\n  Danger\n</a>\n<a href="#" className="mr-2 badge badge-warning">\n  Warning\n</a>\n<a href="#" className="mr-2 badge badge-info">\n  Info\n</a>\n<a href="#" className="mr-2 badge badge-light">\n  Light\n</a>\n<a href="#" className="mr-2 badge badge-dark">\n  Dark\n</a>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Badge:o.a,Button:t.a},mdxType:"Playground"},Object(d.b)("a",{href:"#",className:"mr-2 badge badge-primary"},"Primary"),Object(d.b)("a",{href:"#",className:"mr-2 badge badge-secondary"},"Secondary"),Object(d.b)("a",{href:"#",className:"mr-2 badge badge-success"},"Success"),Object(d.b)("a",{href:"#",className:"mr-2 badge badge-danger"},"Danger"),Object(d.b)("a",{href:"#",className:"mr-2 badge badge-warning"},"Warning"),Object(d.b)("a",{href:"#",className:"mr-2 badge badge-info"},"Info"),Object(d.b)("a",{href:"#",className:"mr-2 badge badge-light"},"Light"),Object(d.b)("a",{href:"#",className:"mr-2 badge badge-dark"},"Dark")),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{}),'<a href="#" class="badge badge-primary">Primary</a>\n<a href="#" class="badge badge-secondary">Secondary</a>\n<a href="#" class="badge badge-success">Success</a>\n<a href="#" class="badge badge-danger">Danger</a>\n<a href="#" class="badge badge-warning">Warning</a>\n<a href="#" class="badge badge-info">Info</a>\n<a href="#" class="badge badge-light">Light</a>\n<a href="#" class="badge badge-dark">Dark</a>\n')))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Badge/badges.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=components-badge-badges.8effb6d10ae75ed0c9f9.js.map