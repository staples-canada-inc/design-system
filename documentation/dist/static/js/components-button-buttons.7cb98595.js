(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./components/Button/buttons.mdx":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return g});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),d=n("./node_modules/reactstrap/es/Button.js"),s=n("./node_modules/reactstrap/es/ButtonDropdown.js"),b=n("./node_modules/reactstrap/es/DropdownToggle.js"),p=n("./node_modules/reactstrap/es/DropdownMenu.js"),l=n("./node_modules/reactstrap/es/DropdownItem.js"),i=n("./node_modules/reactstrap/es/ButtonGroup.js"),c=n("./node_modules/reactstrap/es/ButtonToolbar.js"),u=n("./node_modules/reactstrap/es/UncontrolledButtonDropdown.js"),m={},y="wrapper";function g(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)(y,Object.assign({},m,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"buttons"},"Buttons"),Object(a.b)("h2",{id:"button-tags"},"Button Tags"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},".btn")," classes are designed to be used with the ",Object(a.b)("inlineCode",{parentName:"p"},"<button>")," element. However, you can also use these classes on ",Object(a.b)("inlineCode",{parentName:"p"},"<a>")," or ",Object(a.b)("inlineCode",{parentName:"p"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),Object(a.b)("h3",{id:"buttons-1"},"Buttons"),Object(a.b)(r.c,{__position:0,__code:'<Button color="primary" className="mr-2">\n  Primary\n</Button>\n\n<Button color="secondary" className="mr-2">\n  Secondary\n</Button>\n\n<Button color="tertiary" className="mr-2">\n  Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",className:"mr-2",mdxType:"Button"},"Primary"),Object(a.b)(d.a,{color:"secondary",className:"mr-2",mdxType:"Button"},"Secondary"),Object(a.b)(d.a,{color:"tertiary",className:"mr-2",mdxType:"Button"},"Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary">Primary</button>\n<button type="button" class="btn btn-secondary">Secondary</button>\n<button type="button" class="btn btn-tertiary">Tertiary</button>\n')),Object(a.b)("h2",{id:"group-button"},"Group Button"),Object(a.b)("p",null,"Note that these buttons have spaces between them. You can also group them with the ",Object(a.b)("inlineCode",{parentName:"p"},".btn-group")," class. Here is an example."),Object(a.b)("p",null,"Wrap a series of buttons with .btn in .btn-group."),Object(a.b)("h3",{id:"ensure-correct-role-and-provide-a-label"},"Ensure correct role and provide a label"),Object(a.b)("p",null,"In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be ",Object(a.b)("inlineCode",{parentName:"p"},'role="group"'),", while toolbars should have a ",Object(a.b)("inlineCode",{parentName:"p"},'role="toolbar"'),"."),Object(a.b)("p",null,"In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label"),", but alternatives such as ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby")," can also be used."),Object(a.b)("h3",{id:"group-buttons"},"Group Buttons"),Object(a.b)(r.c,{__position:1,__code:"<ButtonGroup>\n  <Button>Item Left</Button>\n\n  <Button>Item Middle</Button>\n\n  <Button>Item Right</Button>\n</ButtonGroup>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(i.a,{mdxType:"ButtonGroup"},Object(a.b)(d.a,{mdxType:"Button"},"Item Left"),Object(a.b)(d.a,{mdxType:"Button"},"Item Middle"),Object(a.b)(d.a,{mdxType:"Button"},"Item Right"))),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group" role="group" aria-label="Basic example">\n    <button type="button" class="btn btn-primary">Item Left</button>\n    <button type="button" class="btn btn-primary">Item Middle</button>\n    <button type="button" class="btn btn-primary">Item Right</button>\n</div>\n')),Object(a.b)("h2",{id:"call-to-action-button"},"Call to Action Button"),Object(a.b)("p",null,"Call to Action (CTA) buttons are typically used in banners and carousels, or anywhere we would want the user to action a particular item. They may also be used on busy backgrounds to increase visibility. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"There is a limit of one CTA button per page and should be used for the most prominent action on the page.")),Object(a.b)("h3",{id:"cta-buttons"},"CTA Buttons"),Object(a.b)(r.c,{__position:2,__code:'<Button color="primary" className="mr-2 cta">\n  Primary\n</Button>\n\n<Button color="secondary" className="mr-2 cta">\n  Secondary\n</Button>\n\n<Button color="tertiary" className="mr-2 cta">\n  Tertiary\n</Button>\n\n<br />\n\n<Button color="primary" className="mr-2 mt-3 cta" size="lg">\n  Large Primary\n</Button>\n\n<Button color="secondary" className="mr-2 mt-3 cta" size="lg">\n  Large Secondary\n</Button>\n\n<Button color="tertiary" className="mr-2 mt-3 cta" size="lg">\n  Large Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",className:"mr-2 cta",mdxType:"Button"},"Primary"),Object(a.b)(d.a,{color:"secondary",className:"mr-2 cta",mdxType:"Button"},"Secondary"),Object(a.b)(d.a,{color:"tertiary",className:"mr-2 cta",mdxType:"Button"},"Tertiary"),Object(a.b)("br",null),Object(a.b)(d.a,{color:"primary",className:"mr-2 mt-3 cta",size:"lg",mdxType:"Button"},"Large Primary"),Object(a.b)(d.a,{color:"secondary",className:"mr-2 mt-3 cta",size:"lg",mdxType:"Button"},"Large Secondary"),Object(a.b)(d.a,{color:"tertiary",className:"mr-2 mt-3 cta",size:"lg",mdxType:"Button"},"Large Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary cta"Primary</button>\n<button type="button" class="btn btn-secondary cta">Secondary</button>\n<button type="button" class="btn btn-tertiary cta">Tertiary</button>\n')),Object(a.b)("h2",{id:"sizes"},"Sizes"),Object(a.b)("p",null,"Fancy larger or smaller buttons? Add ",Object(a.b)("inlineCode",{parentName:"p"},".btn-lg")," or ",Object(a.b)("inlineCode",{parentName:"p"},".btn-sm")," for additional sizes."),Object(a.b)("h3",{id:"large-buttons"},"Large Buttons"),Object(a.b)(r.c,{__position:3,__code:'<Button color="primary" className="mr-2" size="lg">\n  Large Primary\n</Button>\n\n<Button color="secondary" className="mr-2" size="lg">\n  Large Secondary\n</Button>\n\n<Button color="tertiary" className="mr-2" size="lg">\n  Large Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",className:"mr-2",size:"lg",mdxType:"Button"},"Large Primary"),Object(a.b)(d.a,{color:"secondary",className:"mr-2",size:"lg",mdxType:"Button"},"Large Secondary"),Object(a.b)(d.a,{color:"tertiary",className:"mr-2",size:"lg",mdxType:"Button"},"Large Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary btn-lg">Large Primary</button>\n<button type="button" class="btn btn-secondary btn-lg">Large Secondary</button>\n<button type="button" class="btn btn-tertiary btn-lg">Large Tertiary</button>\n')),Object(a.b)("h3",{id:"small-buttons"},"Small Buttons"),Object(a.b)(r.c,{__position:4,__code:'<Button color="primary" className="mr-2" size="sm">\n  Small Primary\n</Button>\n<Button color="secondary" className="mr-2" size="sm">\n  Small Secondary\n</Button>\n\n<Button color="tertiary" className="mr-2" size="sm">\n  Small Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",className:"mr-2",size:"sm",mdxType:"Button"},"Small Primary"),Object(a.b)(d.a,{color:"secondary",className:"mr-2",size:"sm",mdxType:"Button"},"Small Secondary"),Object(a.b)(d.a,{color:"tertiary",className:"mr-2",size:"sm",mdxType:"Button"},"Small Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary btn-sm">Primary</button>\n<button type="button" class="btn btn-secondary btn-sm">Secondary</button>\n<button type="button" class="btn btn-tertiary btn-sm">Tertiary</button>\n')),Object(a.b)("h2",{id:"block-button"},"Block Button"),Object(a.b)("p",null,"Create block level buttons that span the full width of a parent-by adding ",Object(a.b)("inlineCode",{parentName:"p"},".btn-block"),"."),Object(a.b)(r.c,{__position:5,__code:'<Button color="primary" size="lg" block>\n  Large Primary\n</Button>\n\n<Button color="secondary" size="lg" block>\n  Large Secondary\n</Button>\n\n<Button color="tertiary" size="lg" block>\n  Large Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",size:"lg",block:!0,mdxType:"Button"},"Large Primary"),Object(a.b)(d.a,{color:"secondary",size:"lg",block:!0,mdxType:"Button"},"Large Secondary"),Object(a.b)(d.a,{color:"tertiary",size:"lg",block:!0,mdxType:"Button"},"Large Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary btn-lg btn-block">Primary</button>\n<button type="button" class="btn btn-secondary btn-lg btn-block">Secondary</button>\n<button type="button" class="btn btn-tertiary btn-lg btn-block">Tertiary</button>\n')),Object(a.b)("h2",{id:"active-state"},"Active state"),Object(a.b)("p",null,"Buttons will appear pressed (with a darker background, darker border and inset shadow) when active. There\u2019s no need to add a class to ",Object(a.b)("inlineCode",{parentName:"p"},"<button>"),"s as they use a pseudo-class. However, you can still force the same active appearance with ",Object(a.b)("inlineCode",{parentName:"p"},".active")," (and include the aria-pressed='true' attribute) should you need to replicate the state programmatically."),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},".active")," to items in the dropdown to style them as active."),Object(a.b)("h3",{id:"active-button"},"Active Button"),Object(a.b)(r.c,{__position:6,__code:'<Button color="primary" active className="mr-2">\n  Primary\n</Button>\n\n<Button color="secondary" active className="mr-2">\n  Secondary\n</Button>\n\n<Button color="tertiary" active className="mr-2">\n  Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",active:!0,className:"mr-2",mdxType:"Button"},"Primary"),Object(a.b)(d.a,{color:"secondary",active:!0,className:"mr-2",mdxType:"Button"},"Secondary"),Object(a.b)(d.a,{color:"tertiary",active:!0,className:"mr-2",mdxType:"Button"},"Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary active">Primary</button>\n<button type="button" class="btn btn-secondary active">Secondary</button>\n<button type="button" class="btn btn-tertiary active">Tertiary</button>\n')),Object(a.b)("h2",{id:"disabled-state"},"Disabled state"),Object(a.b)("p",null,"Make buttons look inactive by adding the disabled boolean attribute to any ",Object(a.b)("inlineCode",{parentName:"p"},"<button>")," element."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"However to make the style for disabled buttons in compliance to Staples Design System we would use another colour class for disabled buttons")),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},".disabled")," to items in the dropdown to style them as disabled."),Object(a.b)("h3",{id:"disabled-default-button"},"Disabled Default Button"),Object(a.b)(r.c,{__position:7,__code:'<Button color="primary" disabled className="mr-2">\n  Primary\n</Button>\n\n<Button color="secondary" disabled className="mr-2">\n  Secondary\n</Button>\n\n<Button color="tertiary" disabled className="mr-2">\n  Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",disabled:!0,className:"mr-2",mdxType:"Button"},"Primary"),Object(a.b)(d.a,{color:"secondary",disabled:!0,className:"mr-2",mdxType:"Button"},"Secondary"),Object(a.b)(d.a,{color:"tertiary",disabled:!0,className:"mr-2",mdxType:"Button"},"Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-tertiary" disabled >Primary</button>\n<button type="button" class="btn btn-tertiary" disabled >Secondary</button>\n<button type="button" class="btn btn-tertiary" disabled >Tertiary</button>\n')),Object(a.b)("h3",{id:"disabled-call-to-action-button"},"Disabled Call To Action Button"),Object(a.b)(r.c,{__position:8,__code:'<Button color="primary" disabled className="mr-2 cta">\n  Primary\n</Button>\n\n<Button color="secondary" disabled className="mr-2 cta">\n  Secondary\n</Button>\n\n<Button color="tertiary" disabled className="mr-2 cta">\n  Tertiary\n</Button>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(d.a,{color:"primary",disabled:!0,className:"mr-2 cta",mdxType:"Button"},"Primary"),Object(a.b)(d.a,{color:"secondary",disabled:!0,className:"mr-2 cta",mdxType:"Button"},"Secondary"),Object(a.b)(d.a,{color:"tertiary",disabled:!0,className:"mr-2 cta",mdxType:"Button"},"Tertiary")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<button type="button" class="btn btn-primary cta" disabled>Primary</button>\n<button type="button" class="btn btn-secondary cta" disabled>Secondary</button>\n<button type="button" class="btn btn-tertiary cta" disabled>Tertiary</button>\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Link functionality caveat")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},".disabled")," class uses ",Object(a.b)("inlineCode",{parentName:"p"},"pointer-events: none")," to try to disable the link functionality of ",Object(a.b)("inlineCode",{parentName:"p"},"<a>"),", but that CSS property is not yet standardized. In addition, even in browsers that do support ",Object(a.b)("inlineCode",{parentName:"p"},"pointer-events: none"),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",Object(a.b)("inlineCode",{parentName:"p"},"tabindex='-1'")," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality."),Object(a.b)("h2",{id:"button-dropdowns"},"Button Dropdowns"),Object(a.b)("p",null,"Any single ",Object(a.b)("inlineCode",{parentName:"p"},".btn")," can be turned into a dropdown toggle with some markup changes. Here\u2019s how you can put them to work with ",Object(a.b)("inlineCode",{parentName:"p"},"<button>")," elements:"),Object(a.b)("h3",{id:"dropdown-button-with-links-and-dropdown-header"},"Dropdown Button with Links and Dropdown Header"),Object(a.b)(r.c,{__position:9,__code:"<UncontrolledButtonDropdown>\n  <DropdownToggle caret>Dropdown</DropdownToggle>\n  <DropdownMenu>\n    <DropdownItem header>Header</DropdownItem>\n    <DropdownItem disabled>Action</DropdownItem>\n    <DropdownItem>Another Action</DropdownItem>\n    <DropdownItem divider />\n    <DropdownItem>Another Action</DropdownItem>\n  </DropdownMenu>\n</UncontrolledButtonDropdown>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,Button:d.a,ButtonDropdown:s.a,DropdownToggle:b.a,DropdownMenu:p.a,DropdownItem:l.a,ButtonGroup:i.a,ButtonToolbar:c.a,UncontrolledButtonDropdown:u.a},mdxType:"Playground"},Object(a.b)(u.a,{mdxType:"UncontrolledButtonDropdown"},Object(a.b)(b.a,{caret:!0,mdxType:"DropdownToggle"},"Dropdown"),Object(a.b)(p.a,{mdxType:"DropdownMenu"},Object(a.b)(l.a,{header:!0,mdxType:"DropdownItem"},"Header"),Object(a.b)(l.a,{disabled:!0,mdxType:"DropdownItem"},"Action"),Object(a.b)(l.a,{mdxType:"DropdownItem"},"Another Action"),Object(a.b)(l.a,{divider:!0,mdxType:"DropdownItem"}),Object(a.b)(l.a,{mdxType:"DropdownItem"},"Another Action")))),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="dropdown">\n    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        Dropdown button\n    </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <h6 class="dropdown-header">Dropdown header</h6>\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n\n<div class="dropdown">\n    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        Dropdown button\n    </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <h6 class="dropdown-header">Dropdown header</h6>\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n\n<div class="dropdown">\n    <button class="btn btn-tertiary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        Dropdown button\n    </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <h6 class="dropdown-header">Dropdown header</h6>\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"dropleft"},"Dropleft"),Object(a.b)("p",null,"Trigger dropdown menus to the left of elements by adding ",Object(a.b)("inlineCode",{parentName:"p"},".dropleft")," to the parent element."),Object(a.b)("h3",{id:"dropleft-button"},"Dropleft Button"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group dropleft">\n    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n    Dropleft\n  </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"dropright"},"Dropright"),Object(a.b)("p",null,"Trigger dropdown menus to the right of elements by adding ",Object(a.b)("inlineCode",{parentName:"p"},".dropright")," to the parent element."),Object(a.b)("h3",{id:"dropright-button"},"Dropright Button"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group dropright">\n    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n    Dropright\n  </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"dropup"},"Dropup"),Object(a.b)("p",null,"Trigger dropdown menus above elements by adding ",Object(a.b)("inlineCode",{parentName:"p"},".dropup")," to the parent element."),Object(a.b)("h3",{id:"dropup-button"},"Dropup Button"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group dropup">\n    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n    Dropup\n  </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"split-button"},"Split Button"),Object(a.b)("p",null,"Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of ",Object(a.b)("inlineCode",{parentName:"p"},".dropdown-toggle-split")," for proper spacing around the dropdown caret."),Object(a.b)("p",null,"We use this extra class to reduce the horizontal padding on either side of the caret by 25% and remove the ",Object(a.b)("inlineCode",{parentName:"p"},"margin-left")," that\u2019s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button."),Object(a.b)("h3",{id:"split-button-and-dropdown-divider"},"Split Button and Dropdown Divider"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group">\n    <button type="button" class="btn btn-danger">Action</button>\n    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n    <span class="sr-only">Toggle Dropdown</span>\n  </button>\n    <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"split-dropleft"},"Split Dropleft"),Object(a.b)("p",null,"Trigger dropdown menus to the left of elements by adding ",Object(a.b)("inlineCode",{parentName:"p"},".dropleft")," to the parent element."),Object(a.b)("h3",{id:"split-dropleft-button"},"Split Dropleft Button"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group">\n    <div class="btn-group dropleft" role="group">\n        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      <span class="sr-only">Toggle Dropleft</span>\n    </button>\n        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n            <a class="dropdown-item" href="#">Action</a>\n            <a class="dropdown-item" href="#">Another action</a>\n            <a class="dropdown-item" href="#">Something else here</a>\n        </div>\n    </div>\n    <button type="button" class="btn btn-secondary">\n    Split dropleft\n  </button>\n</div>\n')),Object(a.b)("h2",{id:"split-dropright"},"Split Dropright"),Object(a.b)("p",null,"Trigger dropdown menus to the right of elements by adding ",Object(a.b)("inlineCode",{parentName:"p"},".dropright")," to the parent element."),Object(a.b)("h3",{id:"split-dropright-button"},"Split Dropright Button"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group dropright">\n    <button type="button" class="btn btn-secondary">\n    Split dropright\n  </button>\n    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n    <span class="sr-only">Toggle Dropright</span>\n  </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"split-dropup"},"Split Dropup"),Object(a.b)("p",null,"Trigger dropdown menus above elements by adding ",Object(a.b)("inlineCode",{parentName:"p"},".dropup")," to the parent element."),Object(a.b)("h3",{id:"split-dropup-button"},"Split Dropup Button"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="btn-group dropup">\n    <button type="button" class="btn btn-secondary">\n    Split dropup\n  </button>\n    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n    <span class="sr-only">Toggle Dropdown</span>\n  </button>\n    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n    </div>\n</div>\n')))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Button/buttons.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=components-button-buttons.7fe109db3117195378ab.js.map