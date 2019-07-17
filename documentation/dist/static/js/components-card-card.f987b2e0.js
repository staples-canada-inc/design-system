(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./components/Card/card.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return y});var d=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r=a("./node_modules/docz/dist/index.esm.js"),o=a("./node_modules/reactstrap/es/Card.js"),i=a("./node_modules/reactstrap/es/CardImg.js"),s=a("./node_modules/reactstrap/es/CardText.js"),c=a("./node_modules/reactstrap/es/CardBody.js"),l=a("./node_modules/reactstrap/es/CardTitle.js"),p=a("./node_modules/reactstrap/es/CardSubtitle.js"),b=a("./node_modules/reactstrap/es/Button.js"),u=a("./node_modules/reactstrap/es/ListGroup.js"),m=a("./node_modules/reactstrap/es/ListGroupItem.js"),h={},C="wrapper";function y(e){var t=e.components,a=Object(d.a)(e,["components"]);return Object(n.b)(C,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"card"},"Card"),Object(n.b)("p",null,"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors and powerful display options."),Object(n.b)("p",null,"Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no ",Object(n.b)("inlineCode",{parentName:"p"},"margin")," by default, so use ",Object(n.b)("inlineCode",{parentName:"p"},"spacing utilities")," as needed."),Object(n.b)("p",null,"Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they\u2019ll naturally fill the full width of its parent element. This is easily customized with our various ",Object(n.b)("inlineCode",{parentName:"p"},"sizing options"),"."),Object(n.b)("h3",{id:"basic-card"},"Basic Card"),Object(n.b)(r.c,{__position:0,__code:'<Card style={{ width: 330 }}>\n  <CardImg\n    top\n    width="100%"\n    src="https://source.unsplash.com/600x300?nature"\n    alt="Card image cap"\n  />\n  <CardBody>\n    <CardTitle className="h5 mb-3">Card title</CardTitle>\n    <CardText>\n      Some quick example text to build on the card title and make up the bulk\n      of the card\'s content.\n    </CardText>\n    <Button className="btn-link">View More</Button>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Card:o.a,CardImg:i.a,CardText:s.a,CardBody:c.a,CardTitle:l.a,CardSubtitle:p.a,Button:b.a,ListGroup:u.a,ListGroupItem:m.a},mdxType:"Playground"},Object(n.b)(o.a,{style:{width:330},mdxType:"Card"},Object(n.b)(i.a,{top:!0,width:"100%",src:"https://source.unsplash.com/600x300?nature",alt:"Card image cap",mdxType:"CardImg"}),Object(n.b)(c.a,{mdxType:"CardBody"},Object(n.b)(l.a,{className:"h5 mb-3",mdxType:"CardTitle"},"Card title"),Object(n.b)(s.a,{mdxType:"CardText"},"Some quick example text to build on the card title and make up the bulk of the card's content."),Object(n.b)(b.a,{className:"btn-link",mdxType:"Button"},"View More")))),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),'<div class="card">\n    <img class="card-img-top" src="https://source.unsplash.com/600x300?nature" alt="Card image cap" />\n    <div class="card-body">\n        <h5 class="card-title">Card title</h5>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n        <a href="#" class="card-link">View More</a>\n    </div>\n</div>\n')),Object(n.b)("p",null,"You can also use buttons with links within a card using this documentation:"),Object(n.b)("h3",{id:"card-with-button"},"Card with Button"),Object(n.b)(r.c,{__position:1,__code:'<Card style={{ width: 500 }}>\n  <CardImg\n    top\n    width="100%"\n    src="https://source.unsplash.com/600x300?nature"\n    alt="Card image cap"\n  />\n  <CardBody>\n    <Button color="primary" block>\n      View More\n    </Button>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Card:o.a,CardImg:i.a,CardText:s.a,CardBody:c.a,CardTitle:l.a,CardSubtitle:p.a,Button:b.a,ListGroup:u.a,ListGroupItem:m.a},mdxType:"Playground"},Object(n.b)(o.a,{style:{width:500},mdxType:"Card"},Object(n.b)(i.a,{top:!0,width:"100%",src:"https://source.unsplash.com/600x300?nature",alt:"Card image cap",mdxType:"CardImg"}),Object(n.b)(c.a,{mdxType:"CardBody"},Object(n.b)(b.a,{color:"primary",block:!0,mdxType:"Button"},"View More")))),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),'<div class="card">\n    <div class="card-body">\n        <button href="#" class="btn btn-primary btn-block">View More</button>\n    </div>\n</div>\n')),Object(n.b)("h2",{id:"variations"},"Variations"),Object(n.b)("p",null,"Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what\u2019s supported."),Object(n.b)("h3",{id:"body"},"Body"),Object(n.b)("p",null,"The building block of a card is the ",Object(n.b)("inlineCode",{parentName:"p"},".card-body.")," Use it whenever you need a padded section within a card."),Object(n.b)(r.c,{__position:2,__code:"<Card style={{ width: 330 }}>\n  <CardBody>\n    <p>This is some text within a card body.</p>\n  </CardBody>\n</Card>",__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Card:o.a,CardImg:i.a,CardText:s.a,CardBody:c.a,CardTitle:l.a,CardSubtitle:p.a,Button:b.a,ListGroup:u.a,ListGroupItem:m.a},mdxType:"Playground"},Object(n.b)(o.a,{style:{width:330},mdxType:"Card"},Object(n.b)(c.a,{mdxType:"CardBody"},Object(n.b)("p",null,"This is some text within a card body.")))),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),'<div class="card">\n    <div class="card-body">\n        <p>This is some text within a card body.</p>\n    </div>\n</div>\n')),Object(n.b)("h3",{id:"titles-text-and-links"},"Titles, Text and Links"),Object(n.b)("p",null,"Card titles are used by adding ",Object(n.b)("inlineCode",{parentName:"p"},".card-title")," to a ",Object(n.b)("inlineCode",{parentName:"p"},"<h*>")," tag. In the same way, links are added and placed next to each other by adding ",Object(n.b)("inlineCode",{parentName:"p"},".card-link")," to an ",Object(n.b)("inlineCode",{parentName:"p"},"<a>")," tag."),Object(n.b)("p",null,"Subtitles are used by adding a ",Object(n.b)("inlineCode",{parentName:"p"},".card-subtitle")," to a ",Object(n.b)("inlineCode",{parentName:"p"},"<h*>")," tag. If the ",Object(n.b)("inlineCode",{parentName:"p"},".card-title")," and the ",Object(n.b)("inlineCode",{parentName:"p"},".card-subtitle")," items are placed in a ",Object(n.b)("inlineCode",{parentName:"p"},".card-body")," item, the card title and subtitle are aligned nicely."),Object(n.b)(r.c,{__position:3,__code:'<Card style={{ width: 330 }}>\n  <CardBody>\n    <CardTitle className="h5 mb-3">Card title</CardTitle>\n    <CardSubtitle>Card subtitle</CardSubtitle>\n    <CardText>\n      Some quick example text to build on the card title and make up the bulk\n      of the card\'s content.\n    </CardText>\n    <Button className="btn-link">View More</Button>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Card:o.a,CardImg:i.a,CardText:s.a,CardBody:c.a,CardTitle:l.a,CardSubtitle:p.a,Button:b.a,ListGroup:u.a,ListGroupItem:m.a},mdxType:"Playground"},Object(n.b)(o.a,{style:{width:330},mdxType:"Card"},Object(n.b)(c.a,{mdxType:"CardBody"},Object(n.b)(l.a,{className:"h5 mb-3",mdxType:"CardTitle"},"Card title"),Object(n.b)(p.a,{mdxType:"CardSubtitle"},"Card subtitle"),Object(n.b)(s.a,{mdxType:"CardText"},"Some quick example text to build on the card title and make up the bulk of the card's content."),Object(n.b)(b.a,{className:"btn-link",mdxType:"Button"},"View More")))),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),'<div class="card">\n    <div class="card-body">\n        <h5 class="card-title">Card title</h5>\n        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n        <a href="#" class="card-link" >View More</a>\n    </div>\n</div>\n')),Object(n.b)("h3",{id:"images"},"Images"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},".card-img-top")," places an image to the top of the card. With ",Object(n.b)("inlineCode",{parentName:"p"},".card-text"),", text can be added to the card. Text within ",Object(n.b)("inlineCode",{parentName:"p"},".card-text")," can also be styled with the standard HTML tags."),Object(n.b)(r.c,{__position:4,__code:'<Card style={{ width: 330 }}>\n  <CardImg\n    top\n    width="100%"\n    src="https://source.unsplash.com/600x300?nature"\n    alt="Card image cap"\n  />\n  <CardBody>\n    <CardText>\n      Some quick example text to build on the card title and make up the bulk\n      of the card\'s content.\n    </CardText>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Card:o.a,CardImg:i.a,CardText:s.a,CardBody:c.a,CardTitle:l.a,CardSubtitle:p.a,Button:b.a,ListGroup:u.a,ListGroupItem:m.a},mdxType:"Playground"},Object(n.b)(o.a,{style:{width:330},mdxType:"Card"},Object(n.b)(i.a,{top:!0,width:"100%",src:"https://source.unsplash.com/600x300?nature",alt:"Card image cap",mdxType:"CardImg"}),Object(n.b)(c.a,{mdxType:"CardBody"},Object(n.b)(s.a,{mdxType:"CardText"},"Some quick example text to build on the card title and make up the bulk of the card's content.")))),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),'<div class="card">\n<img class="card-img-top" src="https://source.unsplash.com/600x300?nature" alt="Card image cap" />\n    <div class="card-body">\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n    </div>\n</div>\n')))}y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Card/card.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=components-card-card.55ea3ae7a62b6798f48b.js.map