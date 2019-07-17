(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./components/Dropdown/dropdown.mdx":function(o,e,n){"use strict";n.r(e),n.d(e,"default",function(){return D});var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),p=n("./node_modules/reactstrap/es/UncontrolledDropdown.js"),l=n("./node_modules/reactstrap/es/UncontrolledCollapse.js"),c=n("./node_modules/reactstrap/es/DropdownToggle.js"),a=n("./node_modules/reactstrap/es/DropdownMenu.js"),b=n("./node_modules/reactstrap/es/DropdownItem.js"),s=n("./node_modules/reactstrap/es/Button.js"),i=n("./node_modules/reactstrap/es/Card.js"),m=n("./node_modules/reactstrap/es/CardBody.js"),u={},w="wrapper";function D(o){var e=o.components,n=Object(t.a)(o,["components"]);return Object(d.b)(w,Object.assign({},u,n,{components:e,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"dropdown-menu"},"Dropdown Menu"),Object(d.b)("p",null,"Dropdowns present a list of options that can be used to filter existing content. They can also be used for nested menu items or in responsive views for components such as tabs. For multi-level dropdowns, it is recommended to limit options to 1-2 additional levels as it can get confusing for the user."),Object(d.b)(r.c,{__position:0,__code:"<UncontrolledDropdown>\n  <DropdownToggle caret>Dropdown</DropdownToggle>\n  <DropdownMenu>\n    <DropdownItem>Action</DropdownItem>\n    <DropdownItem>Another Action</DropdownItem>\n    <DropdownItem>Something else here</DropdownItem>\n  </DropdownMenu>\n</UncontrolledDropdown>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,UncontrolledDropdown:p.a,UncontrolledCollapse:l.a,DropdownToggle:c.a,DropdownMenu:a.a,DropdownItem:b.a,Button:s.a,Card:i.a,CardBody:m.a},mdxType:"Playground"},Object(d.b)(p.a,{mdxType:"UncontrolledDropdown"},Object(d.b)(c.a,{caret:!0,mdxType:"DropdownToggle"},"Dropdown"),Object(d.b)(a.a,{mdxType:"DropdownMenu"},Object(d.b)(b.a,{mdxType:"DropdownItem"},"Action"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"Another Action"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"Something else here")))),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{}),'<div class="dropdown">\n    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        Dropdown button\n    </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n')),Object(d.b)("h2",{id:"multi-level-dropdown-menu"},"Multi-Level Dropdown Menu"),Object(d.b)("p",null,"In this dropdown menu, we have multi-leveled dropdowns which allows users to have the option to select certain things based on a subject/category."),Object(d.b)(r.c,{__position:1,__code:'<UncontrolledDropdown>\n  <DropdownToggle caret>Dropdown</DropdownToggle>\n  <DropdownMenu>\n    <DropdownItem>First Level</DropdownItem>\n    <DropdownItem>First Level</DropdownItem>\n    <Button\n      type="button"\n      tabindex="0"\n      role="menuitem"\n      className="dropdown-toggle"\n      id="toggler"\n      caret\n    >\n      Toggle\n    </Button>\n    <UncontrolledCollapse toggler="#toggler" className="dropdown-submenu">\n      <DropdownItem>Second Level</DropdownItem>\n      <DropdownItem>Second Level</DropdownItem>\n    </UncontrolledCollapse>\n    <DropdownItem>First Level</DropdownItem>\n    <DropdownItem>First Level</DropdownItem>\n  </DropdownMenu>\n</UncontrolledDropdown>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,UncontrolledDropdown:p.a,UncontrolledCollapse:l.a,DropdownToggle:c.a,DropdownMenu:a.a,DropdownItem:b.a,Button:s.a,Card:i.a,CardBody:m.a},mdxType:"Playground"},Object(d.b)(p.a,{mdxType:"UncontrolledDropdown"},Object(d.b)(c.a,{caret:!0,mdxType:"DropdownToggle"},"Dropdown"),Object(d.b)(a.a,{mdxType:"DropdownMenu"},Object(d.b)(b.a,{mdxType:"DropdownItem"},"First Level"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"First Level"),Object(d.b)(s.a,{type:"button",tabindex:"0",role:"menuitem",className:"dropdown-toggle",id:"toggler",caret:!0,mdxType:"Button"},"Toggle"),Object(d.b)(l.a,{toggler:"#toggler",className:"dropdown-submenu",mdxType:"UncontrolledCollapse"},Object(d.b)(b.a,{mdxType:"DropdownItem"},"Second Level"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"Second Level")),Object(d.b)(b.a,{mdxType:"DropdownItem"},"First Level"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"First Level")))),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{}),'<div class="dropdown">\n    <button type="button" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle btn btn-secondary">Dropdown</button>\n    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">\n        <button type="button" tabindex="0" role="menuitem" class="dropdown-item">First Level</button>\n        <button type="button" tabindex="0" role="menuitem" class="dropdown-item">First Level</button>\n        <button type="button" tabindex="0" role="menuitem" id="toggler" class="dropdown-toggle btn btn-secondary">Toggle</button>\n        <div toggler="#toggler" class="dropdown-submenu collapse">\n            <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Second Level</button>\n            <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Second Level</button>\n        </div>\n        <button type="button" tabindex="0" role="menuitem" class="dropdown-item">First Level</button>\n        <button type="button" tabindex="0" role="menuitem" class="dropdown-item">First Level</button>\n    </div>\n</div>\n')),Object(d.b)("h2",{id:"dropdown-directions"},"Dropdown directions"),Object(d.b)(r.c,{__position:2,__code:'<UncontrolledDropdown direction="up">\n  <DropdownToggle caret>Dropup</DropdownToggle>\n  <DropdownMenu>\n    <DropdownItem>Another Action</DropdownItem>\n    <DropdownItem>Another Action</DropdownItem>\n  </DropdownMenu>\n</UncontrolledDropdown>\n<br />\n<UncontrolledDropdown direction="left">\n  <DropdownToggle caret>Dropleft</DropdownToggle>\n  <DropdownMenu>\n    <DropdownItem>Another Action</DropdownItem>\n    <DropdownItem>Another Action</DropdownItem>\n  </DropdownMenu>\n</UncontrolledDropdown>\n<br />\n<UncontrolledDropdown direction="right">\n  <DropdownToggle caret>Dropright</DropdownToggle>\n  <DropdownMenu>\n    <DropdownItem>Another Action</DropdownItem>\n    <DropdownItem>Another Action</DropdownItem>\n  </DropdownMenu>\n</UncontrolledDropdown>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,UncontrolledDropdown:p.a,UncontrolledCollapse:l.a,DropdownToggle:c.a,DropdownMenu:a.a,DropdownItem:b.a,Button:s.a,Card:i.a,CardBody:m.a},mdxType:"Playground"},Object(d.b)(p.a,{direction:"up",mdxType:"UncontrolledDropdown"},Object(d.b)(c.a,{caret:!0,mdxType:"DropdownToggle"},"Dropup"),Object(d.b)(a.a,{mdxType:"DropdownMenu"},Object(d.b)(b.a,{mdxType:"DropdownItem"},"Another Action"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"Another Action"))),Object(d.b)("br",null),Object(d.b)(p.a,{direction:"left",mdxType:"UncontrolledDropdown"},Object(d.b)(c.a,{caret:!0,mdxType:"DropdownToggle"},"Dropleft"),Object(d.b)(a.a,{mdxType:"DropdownMenu"},Object(d.b)(b.a,{mdxType:"DropdownItem"},"Another Action"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"Another Action"))),Object(d.b)("br",null),Object(d.b)(p.a,{direction:"right",mdxType:"UncontrolledDropdown"},Object(d.b)(c.a,{caret:!0,mdxType:"DropdownToggle"},"Dropright"),Object(d.b)(a.a,{mdxType:"DropdownMenu"},Object(d.b)(b.a,{mdxType:"DropdownItem"},"Another Action"),Object(d.b)(b.a,{mdxType:"DropdownItem"},"Another Action")))),Object(d.b)("p",null,"You can also change the directions of the dropdowns to become droplefts. droprights or dropups."),Object(d.b)("table",null,Object(d.b)("thead",null,Object(d.b)("th",null,"Class"),Object(d.b)("th",null,"Direction")),Object(d.b)("tbody",null,Object(d.b)("tr",null,Object(d.b)("td",null,Object(d.b)("code",null,".dropdown")),Object(d.b)("td",null,"Down")),Object(d.b)("tr",null,Object(d.b)("td",null,Object(d.b)("code",null,".dropright")),Object(d.b)("td",null,"Right")),Object(d.b)("tr",null,Object(d.b)("td",null,Object(d.b)("code",null,".dropleft")),Object(d.b)("td",null,"Left")),Object(d.b)("tr",null,Object(d.b)("td",null,Object(d.b)("code",null,".dropup")),Object(d.b)("td",null,"Up")))))}D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Dropdown/dropdown.mdx"}}),D.isMDXComponent=!0}}]);
//# sourceMappingURL=components-dropdown-dropdown.55ea3ae7a62b6798f48b.js.map