(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./components/Pagination/pagination.mdx":function(a,n,i){"use strict";i.r(n),i.d(n,"default",function(){return b});var e=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),o=i("./node_modules/docz/dist/index.esm.js"),s=i("./node_modules/reactstrap/es/Pagination.js"),l=i("./node_modules/reactstrap/es/PaginationItem.js"),r=i("./node_modules/reactstrap/es/PaginationLink.js"),p={},g="wrapper";function b(a){var n=a.components,i=Object(e.a)(a,["components"]);return Object(t.b)(g,Object.assign({},p,i,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"pagination"},"Pagination"),Object(t.b)("p",null,"Pagination is used to split up content or data into several pages, with controls to navigate to the next or previous page."),Object(t.b)("p",null,"Typically, pagination is used where there is more than 25 items displayed in one view. The default number displayed will vary depending on context. Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ",Object(t.b)("inlineCode",{parentName:"p"},"aria")," attributes. Represent First, Previous, Next and Last as icons. The pagination is always borderless."),Object(t.b)("p",null,"Here is a simple implementation of a pagination:"),Object(t.b)(o.c,{__position:0,__code:'<Pagination aria-label="Page navigation example">\n  <PaginationItem>\n    <PaginationLink first href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">1</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">2</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">3</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink last href="#" />\n  </PaginationItem>\n</Pagination>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Pagination:s.a,PaginationItem:l.a,PaginationLink:r.a},mdxType:"Playground"},Object(t.b)(s.a,{"aria-label":"Page navigation example",mdxType:"Pagination"},Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{first:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{previous:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"1")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"2")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"3")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{next:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{last:!0,href:"#",mdxType:"PaginationLink"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<nav aria-label="Page navigation example">\n    <ul class="pagination">\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="First">\n                <span aria-hidden="true">&laquo;</span>\n            </a>\n        </li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Previous">\n                <span aria-hidden="true">\u2039</span>\n            </a>\n        </li>\n        <li class="page-item"><a class="page-link" href="#">1</a></li>\n        <li class="page-item"><a class="page-link" href="#">2</a></li>\n        <li class="page-item"><a class="page-link" href="#">3</a></li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Next">\n                <span aria-hidden="true">\u203a</span>\n            </a>\n        </li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Last">\n                <span aria-hidden="true">&raquo;</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n')),Object(t.b)("h2",{id:"disabled-and-active-states"},"Disabled and Active States"),Object(t.b)("p",null,"Pagination links are customizable for different circumstances. Use ",Object(t.b)("inlineCode",{parentName:"p"},".disabled")," for links that appear un-clickable and ",Object(t.b)("inlineCode",{parentName:"p"},".active")," to indicate the current page."),Object(t.b)("p",null,"While the ",Object(t.b)("inlineCode",{parentName:"p"},".disabled")," class uses ",Object(t.b)("inlineCode",{parentName:"p"},"pointer-events: none")," to ",Object(t.b)("em",{parentName:"p"},"try")," to disable the link functionality of ",Object(t.b)("inlineCode",{parentName:"p"},"<a>"),", that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add ",Object(t.b)("inlineCode",{parentName:"p"},'tabindex="-1"')," on disabled links and use custom JavaScript to fully disable their functionality."),Object(t.b)(o.c,{__position:1,__code:'<Pagination aria-label="Page navigation example">\n  <PaginationItem disabled>\n    <PaginationLink first href="#" />\n  </PaginationItem>\n  <PaginationItem disabled>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem active>\n    <PaginationLink href="#">1</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">2</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">3</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink last href="#" />\n  </PaginationItem>\n</Pagination>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Pagination:s.a,PaginationItem:l.a,PaginationLink:r.a},mdxType:"Playground"},Object(t.b)(s.a,{"aria-label":"Page navigation example",mdxType:"Pagination"},Object(t.b)(l.a,{disabled:!0,mdxType:"PaginationItem"},Object(t.b)(r.a,{first:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{disabled:!0,mdxType:"PaginationItem"},Object(t.b)(r.a,{previous:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{active:!0,mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"1")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"2")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"3")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{next:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{last:!0,href:"#",mdxType:"PaginationLink"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<nav aria-label="Page navigation example">\n    <ul class="pagination">\n        <li class="page-item disable" >\n            <a class="page-link" href="#" aria-label="First">\n                <span aria-hidden="true">&laquo;</span>\n            </a>\n        </li>\n        <li class="page-item disable" >\n            <a class="page-link" href="#" aria-label="Previous">\n                <span aria-hidden="true">\u2039</span>\n            </a>\n        </li>\n        <li class="page-item active"><a class="page-link" href="#">1</a></li>\n        <li class="page-item"><a class="page-link" href="#">2</a></li>\n        <li class="page-item"><a class="page-link" href="#">3</a></li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Next">\n                <span aria-hidden="true">\u203a</span>\n            </a>\n        </li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Last">\n                <span aria-hidden="true">&raquo;</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n')),Object(t.b)("h2",{id:"sizing"},"Sizing"),Object(t.b)("p",null,"Fancy larger or smaller pagination? Add ",Object(t.b)("inlineCode",{parentName:"p"},".pagination-lg")," or ",Object(t.b)("inlineCode",{parentName:"p"},".pagination-sm")," for additional sizes. You can also use classes ",Object(t.b)("inlineCode",{parentName:"p"},"pagination-md")," and ",Object(t.b)("inlineCode",{parentName:"p"},"pagination-xl"),"."),Object(t.b)("h3",{id:"large-pagination"},"Large Pagination"),Object(t.b)(o.c,{__position:2,__code:'<Pagination size="lg" aria-label="Page navigation example">\n  <PaginationItem>\n    <PaginationLink first href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">1</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">2</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">3</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink last href="#" />\n  </PaginationItem>\n</Pagination>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Pagination:s.a,PaginationItem:l.a,PaginationLink:r.a},mdxType:"Playground"},Object(t.b)(s.a,{size:"lg","aria-label":"Page navigation example",mdxType:"Pagination"},Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{first:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{previous:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"1")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"2")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"3")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{next:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{last:!0,href:"#",mdxType:"PaginationLink"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<nav aria-label="...">\n    <ul class="pagination pagination-lg">\n        <li class="page-item disable" >\n            <a class="page-link" href="#" aria-label="First">\n                <span aria-hidden="true">&laquo;</span>\n            </a>\n        </li>\n        <li class="page-item disable" >\n            <a class="page-link" href="#" aria-label="Previous">\n                <span aria-hidden="true">\u2039</span>\n            </a>\n        </li>\n        <li class="page-item active" aria-current="page">\n            <span class="page-link">\n                1\n                <span class="sr-only">(current)</span>\n            </span>\n        </li>\n        <li class="page-item"><a class="page-link" href="#">2</a></li>\n        <li class="page-item"><a class="page-link" href="#">3</a></li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Next">\n                <span aria-hidden="true">\u203a</span>\n            </a>\n        </li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Last">\n                <span aria-hidden="true">&raquo;</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n')),Object(t.b)("h3",{id:"small-pagination"},"Small Pagination"),Object(t.b)(o.c,{__position:3,__code:'<Pagination size="sm" aria-label="Page navigation example">\n  <PaginationItem>\n    <PaginationLink first href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">1</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">2</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">3</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink last href="#" />\n  </PaginationItem>\n</Pagination>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Pagination:s.a,PaginationItem:l.a,PaginationLink:r.a},mdxType:"Playground"},Object(t.b)(s.a,{size:"sm","aria-label":"Page navigation example",mdxType:"Pagination"},Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{first:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{previous:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"1")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"2")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{href:"#",mdxType:"PaginationLink"},"3")),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{next:!0,href:"#",mdxType:"PaginationLink"})),Object(t.b)(l.a,{mdxType:"PaginationItem"},Object(t.b)(r.a,{last:!0,href:"#",mdxType:"PaginationLink"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<nav aria-label="...">\n    <ul class="pagination pagination-sm">\n        <li class="page-item disable" >\n            <a class="page-link" href="#" aria-label="First">\n                <span aria-hidden="true">&laquo;</span>\n            </a>\n        </li>\n        <li class="page-item disable" >\n            <a class="page-link" href="#" aria-label="Previous">\n                <span aria-hidden="true">\u2039</span>\n            </a>\n        </li>\n        <li class="page-item active" aria-current="page">\n            <span class="page-link">\n                1\n                <span class="sr-only">(current)</span>\n            </span>\n        </li>\n        <li class="page-item"><a class="page-link" href="#">2</a></li>\n        <li class="page-item"><a class="page-link" href="#">3</a></li>\n                    <li class="page-item">\n            <a class="page-link" href="#" aria-label="Next">\n                <span aria-hidden="true">\u203a</span>\n            </a>\n        </li>\n        <li class="page-item">\n            <a class="page-link" href="#" aria-label="Last">\n                <span aria-hidden="true">&raquo;</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n')),Object(t.b)("h2",{id:"usage"},"Usage"),Object(t.b)("p",null,"Pagination acts similiar to text links and breadcrumbs, where the current page indication is Mid-Gray in colour, and the inactive links remain Dark Blue. Links are underlined in hover state."),Object(t.b)("h3",{id:"assistive-technologies"},"Assistive Technologies"),Object(t.b)("p",null,"We use a block of connected links for our pagination. This not only makes links harder to miss, but easily scalable\u2014all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ",Object(t.b)("inlineCode",{parentName:"p"},"<nav>")," element to identify it as a navigation section to screen readers and other assistive technologies."),Object(t.b)("p",null,"As pages likely have more than one type of navigation, it's advisable to provide a descriptive ",Object(t.b)("inlineCode",{parentName:"p"},"aria-label")," for the ",Object(t.b)("inlineCode",{parentName:"p"},"<nav>")," that reflects its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",Object(t.b)("inlineCode",{parentName:"p"},'aria-label="Search results pages"'),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Pagination/pagination.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=components-pagination-pagination.02a67a6612b8f4eef7ea.js.map