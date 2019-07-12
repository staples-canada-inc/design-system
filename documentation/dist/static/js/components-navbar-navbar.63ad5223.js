(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./components/Navbar/navbar.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return x});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),l=n("./public/images/Staples_Logo_EN.svg"),i=n.n(l),s=n("./public/images/Staples_Logo_White_EN.svg"),d=n.n(s),b=n("./node_modules/reactstrap/es/Collapse.js"),p=n("./node_modules/reactstrap/es/Navbar.js"),c=n("./node_modules/reactstrap/es/NavbarToggler.js"),m=n("./node_modules/reactstrap/es/NavbarBrand.js"),v=n("./node_modules/reactstrap/es/Nav.js"),g=n("./node_modules/reactstrap/es/NavItem.js"),u=n("./node_modules/reactstrap/es/NavLink.js"),h=n("./node_modules/reactstrap/es/UncontrolledDropdown.js"),O=n("./node_modules/reactstrap/es/UncontrolledCollapse.js"),N=n("./node_modules/reactstrap/es/DropdownToggle.js"),j=n("./node_modules/reactstrap/es/DropdownMenu.js"),w=n("./node_modules/reactstrap/es/DropdownItem.js"),y={},T="wrapper";function x(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(t.b)(T,Object.assign({},y,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"navbar"},"Navbar"),Object(t.b)("p",null,"A navigation bar is a section of a user interface intended to aid visitors in accessing information and navigating a site. Navigation bars are implemented in file browsers, web browsers and as a design element of web sites."),Object(t.b)("h3",{id:"responsive"},"Responsive"),Object(t.b)("p",null,"Navbars are responsive by default. Their responsive behavior depends on the Collapse JavaScript plugin, and wrapping ",Object(t.b)("inlineCode",{parentName:"p"},".navbar")," with ",Object(t.b)("inlineCode",{parentName:"p"},".navbar-expand{-sm|-md|-lg|-xl}"),"for responsive collapsing. If you prefer to limit a navbar's horizontal width, you can use containers to do so."),Object(t.b)("h3",{id:"supported-content"},"Supported content"),Object(t.b)("p",null,"Navbars have built-in support for a handful of sub-components. Choose from the following as needed:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},".navbar-brand")," for your company, product, or project name."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},".navbar-nav")," for a full-height and lightweight navigation (including support for dropdowns)."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},".navbar-toggler")," for use with our collapse plugin and other ",Object(t.b)("a",Object.assign({parentName:"li"},{href:"#responsive-behaviors"}),"navigation toggling")," behaviors."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},".form-inline")," for any form controls and actions."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},".navbar-text")," for adding vertically centered strings of text."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},".collapse.navbar-collapse")," for grouping and hiding navbar contents by a parent breakpoint.")),Object(t.b)("h3",{id:"brand"},"Brand"),Object(t.b)("p",null,"The ",Object(t.b)("inlineCode",{parentName:"p"},".navbar-brand")," can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles."),Object(t.b)(r.c,{__position:0,__code:'<Navbar color="light" light expand="md" className="mb-3">\n  <NavbarBrand href="/">Staples Canada Inc.</NavbarBrand>\n</Navbar>\n<Navbar color="light" light expand="md">\n  <NavbarBrand href="/">\n    <img style={{ height: 30 }} src={staplesLogo} />\n  </NavbarBrand>\n</Navbar>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,staplesLogo:i.a,staplesLogoWhite:d.a,Collapse:b.a,Navbar:p.a,NavbarToggler:c.a,NavbarBrand:m.a,Nav:v.a,NavItem:g.a,NavLink:u.a,UncontrolledDropdown:h.a,UncontrolledCollapse:O.a,DropdownToggle:N.a,DropdownMenu:j.a,DropdownItem:w.a},mdxType:"Playground"},Object(t.b)(p.a,{color:"light",light:!0,expand:"md",className:"mb-3",mdxType:"Navbar"},Object(t.b)(m.a,{href:"/",mdxType:"NavbarBrand"},"Staples Canada Inc.")),Object(t.b)(p.a,{color:"light",light:!0,expand:"md",mdxType:"Navbar"},Object(t.b)(m.a,{href:"/",mdxType:"NavbarBrand"},Object(t.b)("img",{style:{height:30},src:i.a})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<nav class="navbar navbar-light bg-light">\n    <a class="navbar-brand" href="#">Navbar</a>\n</nav>\n<nav class="navbar navbar-light bg-light">\n    <a class="navbar-brand" href="#">\n        <img src="/static/img/Staples_Logo_EN.svg" width="30" alt="" />\n    </a>\n</nav>\n')),Object(t.b)("h3",{id:"nav"},"Nav"),Object(t.b)("p",null,"Navbar navigation links build on our ",Object(t.b)("inlineCode",{parentName:"p"},".nav")," options with their own modifier class and require the use of toggler classes for proper responsive styling. ",Object(t.b)("strong",{parentName:"p"},"Navigation in navbars will also grow to occupy as much horizontal space as possible")," to keep your navbar contents securely aligned."),Object(t.b)("p",null,"Active states\u2014with ",Object(t.b)("inlineCode",{parentName:"p"},".active"),"\u2014to indicate the current page can be applied directly to ",Object(t.b)("inlineCode",{parentName:"p"},".nav-link"),"s or their immediate parent ",Object(t.b)("inlineCode",{parentName:"p"},".nav-item"),"s.\nAnd because we use classes for our navs, you can avoid the list-based approach entirely if you like."),Object(t.b)("p",null,"You may also utilize dropdowns in your navbar nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for ",Object(t.b)("inlineCode",{parentName:"p"},".nav-item")," and ",Object(t.b)("inlineCode",{parentName:"p"},".nav-link")," as shown below."),Object(t.b)("h4",{id:"navbar-with-dropdown"},"Navbar with Dropdown"),Object(t.b)(r.c,{__position:1,__code:'<Navbar color="light" light expand="md">\n  <NavbarBrand href="/">\n    <img style={{ height: 30 }} src={staplesLogo} />\n  </NavbarBrand>\n  <NavbarToggler id="toggler" />\n  <UncontrolledCollapse toggler="#toggler" navbar>\n    <Nav className="ml-auto" navbar>\n      <NavItem>\n        <NavLink href="#">Test link 1</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink href="#">Test Link 2</NavLink>\n      </NavItem>\n      <UncontrolledDropdown nav inNavbar>\n        <DropdownToggle nav caret>\n          Options\n        </DropdownToggle>\n        <DropdownMenu right>\n          <DropdownItem>Option 1</DropdownItem>\n          <DropdownItem>Option 2</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Option</DropdownItem>\n        </DropdownMenu>\n      </UncontrolledDropdown>\n    </Nav>\n  </UncontrolledCollapse>\n</Navbar>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,staplesLogo:i.a,staplesLogoWhite:d.a,Collapse:b.a,Navbar:p.a,NavbarToggler:c.a,NavbarBrand:m.a,Nav:v.a,NavItem:g.a,NavLink:u.a,UncontrolledDropdown:h.a,UncontrolledCollapse:O.a,DropdownToggle:N.a,DropdownMenu:j.a,DropdownItem:w.a},mdxType:"Playground"},Object(t.b)(p.a,{color:"light",light:!0,expand:"md",mdxType:"Navbar"},Object(t.b)(m.a,{href:"/",mdxType:"NavbarBrand"},Object(t.b)("img",{style:{height:30},src:i.a})),Object(t.b)(c.a,{id:"toggler",mdxType:"NavbarToggler"}),Object(t.b)(O.a,{toggler:"#toggler",navbar:!0,mdxType:"UncontrolledCollapse"},Object(t.b)(v.a,{className:"ml-auto",navbar:!0,mdxType:"Nav"},Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test link 1")),Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test Link 2")),Object(t.b)(h.a,{nav:!0,inNavbar:!0,mdxType:"UncontrolledDropdown"},Object(t.b)(N.a,{nav:!0,caret:!0,mdxType:"DropdownToggle"},"Options"),Object(t.b)(j.a,{right:!0,mdxType:"DropdownMenu"},Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 1"),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 2"),Object(t.b)(w.a,{divider:!0,mdxType:"DropdownItem"}),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Another Option"))))))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<nav class="navbar navbar-expand-md navbar-light bg-light"><a href="/" class="navbar-brand"><img src="/static/img/Staples_Logo_EN.6b0b5406.svg" style="height: 30px;"></a><button id="toggler" type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>\n    <div toggler="#toggler" class="collapse navbar-collapse">\n        <ul class="ml-auto navbar-nav">\n            <li class="nav-item"><a href="#" class="nav-link">Test link 1</a></li>\n            <li class="nav-item"><a href="#" class="nav-link">Test Link 2</a></li>\n            <li class="dropdown nav-item"><a aria-haspopup="true" href="#" class="dropdown-toggle nav-link" aria-expanded="false">Options</a>\n                <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 1</button><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 2</button>\n                    <div tabindex="-1" class="dropdown-divider"></div><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Another Option</button>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n')),Object(t.b)("h2",{id:"navbar-styles"},"Navbar Styles"),Object(t.b)("p",null,"The navbar styling for Staples sub-sites can either be coloured in our brand red, lightest-gray or charcoal. The Staples logo should be left-justified with nav links right-justified on the same line."),Object(t.b)("h3",{id:"primary-theme"},"Primary Theme"),Object(t.b)(r.c,{__position:2,__code:'<Navbar color="primary" dark expand="md">\n  <NavbarBrand href="/">\n    <img style={{ height: 30 }} src={staplesLogoWhite} />\n  </NavbarBrand>\n  <NavbarToggler id="toggler" />\n  <UncontrolledCollapse toggler="#toggler" navbar>\n    <Nav className="ml-auto" navbar>\n      <NavItem>\n        <NavLink href="#">Test link 1</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink href="#">Test Link 2</NavLink>\n      </NavItem>\n      <UncontrolledDropdown nav inNavbar>\n        <DropdownToggle nav caret>\n          Options\n        </DropdownToggle>\n        <DropdownMenu right>\n          <DropdownItem>Option 1</DropdownItem>\n          <DropdownItem>Option 2</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Option</DropdownItem>\n        </DropdownMenu>\n      </UncontrolledDropdown>\n    </Nav>\n  </UncontrolledCollapse>\n</Navbar>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,staplesLogo:i.a,staplesLogoWhite:d.a,Collapse:b.a,Navbar:p.a,NavbarToggler:c.a,NavbarBrand:m.a,Nav:v.a,NavItem:g.a,NavLink:u.a,UncontrolledDropdown:h.a,UncontrolledCollapse:O.a,DropdownToggle:N.a,DropdownMenu:j.a,DropdownItem:w.a},mdxType:"Playground"},Object(t.b)(p.a,{color:"primary",dark:!0,expand:"md",mdxType:"Navbar"},Object(t.b)(m.a,{href:"/",mdxType:"NavbarBrand"},Object(t.b)("img",{style:{height:30},src:d.a})),Object(t.b)(c.a,{id:"toggler",mdxType:"NavbarToggler"}),Object(t.b)(O.a,{toggler:"#toggler",navbar:!0,mdxType:"UncontrolledCollapse"},Object(t.b)(v.a,{className:"ml-auto",navbar:!0,mdxType:"Nav"},Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test link 1")),Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test Link 2")),Object(t.b)(h.a,{nav:!0,inNavbar:!0,mdxType:"UncontrolledDropdown"},Object(t.b)(N.a,{nav:!0,caret:!0,mdxType:"DropdownToggle"},"Options"),Object(t.b)(j.a,{right:!0,mdxType:"DropdownMenu"},Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 1"),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 2"),Object(t.b)(w.a,{divider:!0,mdxType:"DropdownItem"}),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Another Option"))))))),Object(t.b)("h3",{id:"light-gray-theme"},"Light-Gray Theme"),Object(t.b)(r.c,{__position:3,__code:'<Navbar color="light" light expand="md">\n  <NavbarBrand href="/">\n    <img style={{ height: 30 }} src={staplesLogo} />\n  </NavbarBrand>\n  <NavbarToggler id="toggler" />\n  <UncontrolledCollapse toggler="#toggler" navbar>\n    <Nav className="ml-auto" navbar>\n      <NavItem>\n        <NavLink href="#">Test link 1</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink href="#">Test Link 2</NavLink>\n      </NavItem>\n      <UncontrolledDropdown nav inNavbar>\n        <DropdownToggle nav caret>\n          Options\n        </DropdownToggle>\n        <DropdownMenu right>\n          <DropdownItem>Option 1</DropdownItem>\n          <DropdownItem>Option 2</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Option</DropdownItem>\n        </DropdownMenu>\n      </UncontrolledDropdown>\n    </Nav>\n  </UncontrolledCollapse>\n</Navbar>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,staplesLogo:i.a,staplesLogoWhite:d.a,Collapse:b.a,Navbar:p.a,NavbarToggler:c.a,NavbarBrand:m.a,Nav:v.a,NavItem:g.a,NavLink:u.a,UncontrolledDropdown:h.a,UncontrolledCollapse:O.a,DropdownToggle:N.a,DropdownMenu:j.a,DropdownItem:w.a},mdxType:"Playground"},Object(t.b)(p.a,{color:"light",light:!0,expand:"md",mdxType:"Navbar"},Object(t.b)(m.a,{href:"/",mdxType:"NavbarBrand"},Object(t.b)("img",{style:{height:30},src:i.a})),Object(t.b)(c.a,{id:"toggler",mdxType:"NavbarToggler"}),Object(t.b)(O.a,{toggler:"#toggler",navbar:!0,mdxType:"UncontrolledCollapse"},Object(t.b)(v.a,{className:"ml-auto",navbar:!0,mdxType:"Nav"},Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test link 1")),Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test Link 2")),Object(t.b)(h.a,{nav:!0,inNavbar:!0,mdxType:"UncontrolledDropdown"},Object(t.b)(N.a,{nav:!0,caret:!0,mdxType:"DropdownToggle"},"Options"),Object(t.b)(j.a,{right:!0,mdxType:"DropdownMenu"},Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 1"),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 2"),Object(t.b)(w.a,{divider:!0,mdxType:"DropdownItem"}),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Another Option"))))))),Object(t.b)("h3",{id:"charcoal-theme"},"Charcoal Theme"),Object(t.b)(r.c,{__position:4,__code:'<Navbar color="dark" dark expand="md">\n  <NavbarBrand href="/">\n    <img style={{ height: 30 }} src={staplesLogoWhite} />\n  </NavbarBrand>\n  <NavbarToggler id="toggler" />\n  <UncontrolledCollapse toggler="#toggler" navbar>\n    <Nav className="ml-auto" navbar>\n      <NavItem>\n        <NavLink href="#">Test link 1</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink href="#">Test Link 2</NavLink>\n      </NavItem>\n      <UncontrolledDropdown nav inNavbar>\n        <DropdownToggle nav caret>\n          Options\n        </DropdownToggle>\n        <DropdownMenu right>\n          <DropdownItem>Option 1</DropdownItem>\n          <DropdownItem>Option 2</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Option</DropdownItem>\n        </DropdownMenu>\n      </UncontrolledDropdown>\n    </Nav>\n  </UncontrolledCollapse>\n</Navbar>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,staplesLogo:i.a,staplesLogoWhite:d.a,Collapse:b.a,Navbar:p.a,NavbarToggler:c.a,NavbarBrand:m.a,Nav:v.a,NavItem:g.a,NavLink:u.a,UncontrolledDropdown:h.a,UncontrolledCollapse:O.a,DropdownToggle:N.a,DropdownMenu:j.a,DropdownItem:w.a},mdxType:"Playground"},Object(t.b)(p.a,{color:"dark",dark:!0,expand:"md",mdxType:"Navbar"},Object(t.b)(m.a,{href:"/",mdxType:"NavbarBrand"},Object(t.b)("img",{style:{height:30},src:d.a})),Object(t.b)(c.a,{id:"toggler",mdxType:"NavbarToggler"}),Object(t.b)(O.a,{toggler:"#toggler",navbar:!0,mdxType:"UncontrolledCollapse"},Object(t.b)(v.a,{className:"ml-auto",navbar:!0,mdxType:"Nav"},Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test link 1")),Object(t.b)(g.a,{mdxType:"NavItem"},Object(t.b)(u.a,{href:"#",mdxType:"NavLink"},"Test Link 2")),Object(t.b)(h.a,{nav:!0,inNavbar:!0,mdxType:"UncontrolledDropdown"},Object(t.b)(N.a,{nav:!0,caret:!0,mdxType:"DropdownToggle"},"Options"),Object(t.b)(j.a,{right:!0,mdxType:"DropdownMenu"},Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 1"),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Option 2"),Object(t.b)(w.a,{divider:!0,mdxType:"DropdownItem"}),Object(t.b)(w.a,{mdxType:"DropdownItem"},"Another Option"))))))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<nav class="navbar navbar-expand-md navbar-dark bg-primary"><a href="/" class="navbar-brand"><img src="/static/img/Staples_Logo_White_EN.svg" style="height: 30px;"></a><button id="toggler" type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>\n    <div toggler="#toggler" class="collapse navbar-collapse">\n        <ul class="ml-auto navbar-nav">\n            <li class="nav-item"><a href="#" class="nav-link">Test link 1</a></li>\n            <li class="nav-item"><a href="#" class="nav-link">Test Link 2</a></li>\n            <li class="dropdown nav-item"><a aria-haspopup="true" href="#" class="dropdown-toggle nav-link" aria-expanded="false">Options</a>\n                <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 1</button><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 2</button>\n                    <div tabindex="-1" class="dropdown-divider"></div><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Another Option</button>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n    <nav class="navbar navbar-expand-md navbar-light bg-light"><a href="/" class="navbar-brand"><img src="/static/img/Staples_Logo_EN.svg" style="height: 30px;"></a><button id="toggler" type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>\n    <div toggler="#toggler" class="collapse navbar-collapse">\n        <ul class="ml-auto navbar-nav">\n            <li class="nav-item"><a href="#" class="nav-link">Test link 1</a></li>\n            <li class="nav-item"><a href="#" class="nav-link">Test Link 2</a></li>\n            <li class="dropdown nav-item"><a aria-haspopup="true" href="#" class="dropdown-toggle nav-link" aria-expanded="false">Options</a>\n                <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 1</button><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 2</button>\n                    <div tabindex="-1" class="dropdown-divider"></div><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Another Option</button>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n    <nav class="navbar navbar-expand-md navbar-dark bg-dark"><a href="/" class="navbar-brand"><img src="/static/img/Staples_Logo_White_EN.svg" style="height: 30px;"></a><button id="toggler" type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>\n    <div toggler="#toggler" class="collapse navbar-collapse">\n        <ul class="ml-auto navbar-nav">\n            <li class="nav-item"><a href="#" class="nav-link">Test link 1</a></li>\n            <li class="nav-item"><a href="#" class="nav-link">Test Link 2</a></li>\n            <li class="dropdown nav-item"><a aria-haspopup="true" href="#" class="dropdown-toggle nav-link" aria-expanded="false">Options</a>\n                <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 1</button><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Option 2</button>\n                    <div tabindex="-1" class="dropdown-divider"></div><button type="button" tabindex="0" role="menuitem" class="dropdown-item">Another Option</button>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n')),Object(t.b)("h2",{id:"assistive-technology"},"Assistive Technology"),Object(t.b)("p",null,"Ensure accessibility by using a ",Object(t.b)("inlineCode",{parentName:"p"},"<nav>")," element or, if using a more generic element such as a ",Object(t.b)("inlineCode",{parentName:"p"},"<div>"),", add a ",Object(t.b)("inlineCode",{parentName:"p"},'role="navigation"')," to every navbar to explicitly identify it as a landmark region for users of assistive technologies."),Object(t.b)("h2",{id:"css-classes"},"CSS Classes"),Object(t.b)("table",null,Object(t.b)("thead",null,Object(t.b)("tr",null,Object(t.b)("th",{style:{width:400}},"Selector"),Object(t.b)("th",{style:{width:400}},"Description"))),Object(t.b)("tbody",null,Object(t.b)("tr",null,Object(t.b)("td",null,Object(t.b)("code",null,".navbar-primary .bg-primary")),Object(t.b)("td",null,"This is used to apply colour themes to our custom navbars. Choose from ",Object(t.b)("code",null,".navbar-primary")," for or a primary background color. Then, customize with ",Object(t.b)("code",null,".bg-primary"),"utility. ",Object(t.b)("br",null),"Note: Color hex-code for primary colour: #CC000")),Object(t.b)("tr",null,Object(t.b)("td",null,Object(t.b)("code",null,".navbar-light .bg-light")),Object(t.b)("td",null,"This is used to apply colour themes to our custom navbars. Choose from ",Object(t.b)("code",null,".navbar-dark")," for a light background color. Then, customize with ",Object(t.b)("code",null,".bg-light")," utility.",Object(t.b)("br",null),"Note: Color hex-code for light colour: #F3F3F2")),Object(t.b)("tr",null,Object(t.b)("td",null,Object(t.b)("code",null,".navbar-dark .bg-dark")),Object(t.b)("td",null,"This is used to apply colour themes to our custom navbars. Choose from ",Object(t.b)("code",null,".navbar-dark")," for dark background colors. Then, customize with ",Object(t.b)("code",null,".bg-dark")," utility.",Object(t.b)("br",null),"Note: Color hex-code for dark colour: #444444")))),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Note:")," When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified ",Object(t.b)("inlineCode",{parentName:"p"},".navbar-expand{-sm|-md|-lg|-xl}")," class. This ensures we\u2019re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed."))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Navbar/navbar.mdx"}}),x.isMDXComponent=!0},"./public/images/Staples_Logo_EN.svg":function(e,a,n){e.exports=n.p+"static/img/Staples_Logo_EN.6b0b5406.svg"},"./public/images/Staples_Logo_White_EN.svg":function(e,a,n){e.exports=n.p+"static/img/Staples_Logo_White_EN.e4c5b23e.svg"}}]);
//# sourceMappingURL=components-navbar-navbar.afda1694a9a92002a462.js.map