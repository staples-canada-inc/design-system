(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./components/Radio/radios.mdx":function(e,a,i){"use strict";i.r(a),i.d(a,"default",function(){return c});var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),t=(i("./node_modules/docz/dist/index.esm.js"),{}),l="wrapper";function c(e){var a=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)(l,Object.assign({},t,i,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"radios"},"Radios"),Object(o.b)("p",null,"Default checkboxes and radios are improved upon with the help of ",Object(o.b)("inlineCode",{parentName:"p"},".form-check"),", a single class for both input types that improves the layout and behavior of their HTML elements. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many."),Object(o.b)("p",null,"Checkboxes and radios use are built to support HTML-based form validation and provide concise, accessible labels. As such, our ",Object(o.b)("inlineCode",{parentName:"p"},"<input>"),"s and ",Object(o.b)("inlineCode",{parentName:"p"},"<label>"),"s are sibling elements as opposed to an ",Object(o.b)("inlineCode",{parentName:"p"},"<input>")," within a ",Object(o.b)("inlineCode",{parentName:"p"},"<label>"),". This is slightly more verbose as you must specify id and for attributes to relate the ",Object(o.b)("inlineCode",{parentName:"p"},"<input>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<label>"),"."),Object(o.b)("h3",{id:"examples-of-documentation---radio"},"Examples oF Documentation - Radio"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n    <input class="form-check-input" type="radio" name="exampleCustomRadio" id="customRadios1" value="option1" checked>\n    <label class="form-check-label" for="customRadios1">\n        Default radio\n    </label>\n</div>\n<div class="form-check">\n    <input class="form-check-input" type="radio" name="exampleCustomRadio" id="customRadios2" value="option2">\n    <label class="form-check-label" for="customRadios2">\n        Second default radio\n</label>\n</div>\n')),Object(o.b)("h2",{id:"disabled-radios"},"Disabled Radios"),Object(o.b)("p",null,"Disabled checkboxes and radios are supported. The disabled attribute will apply a lighter color to help indicate the input\u2019s state."),Object(o.b)("h3",{id:"examples-of-documentation---disabled-radios"},"Examples oF Documentation - Disabled Radios"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n    <input class="form-check-input" type="radio" name="exampleCustomRadio1" id="customRadios3" value="option3" disabled>\n    <label class="form-check-label" for="customRadios3">\n        Disabled radio\n    </label>\n</div>\n')),Object(o.b)("h3",{id:"default-stacked"},"Default (stacked)"),Object(o.b)("p",null,"By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with ",Object(o.b)("inlineCode",{parentName:"p"},".form-check"),"."),Object(o.b)("h3",{id:"examples-of-documentation---default-stacked"},"Examples oF Documentation - Default (stacked)"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n  <input class="form-check-input" type="radio" value="" id="defaultRadio1">\n  <label class="form-check-label" for="defaultRadio1">\n    Default checkbox\n  </label>\n</div>\n<div class="form-check">\n  <input class="form-check-input" type="radio" value="" id="defaultRadio2" disabled>\n  <label class="form-check-label" for="defaultRadio2">\n    Disabled checkbox\n  </label>\n</div>\n')),Object(o.b)("h3",{id:"inline"},"Inline"),Object(o.b)("p",null,"Group checkboxes or radios on the same horizontal row by adding ",Object(o.b)("inlineCode",{parentName:"p"},".form-check-inline")," to any ",Object(o.b)("inlineCode",{parentName:"p"},".form-check"),"."),Object(o.b)("h3",{id:"examples-of-documentation---inline"},"Examples oF Documentation - Inline"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check form-check-inline">\n  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">\n  <label class="form-check-label" for="inlineRadio1">1</label>\n</div>\n<div class="form-check form-check-inline">\n  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\n  <label class="form-check-label" for="inlineRadio2">2</label>\n</div>\n<div class="form-check form-check-inline">\n  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>\n  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>\n</div>\n')),Object(o.b)("h3",{id:"without-labels"},"Without labels"),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},".position-static")," to inputs within ",Object(o.b)("inlineCode",{parentName:"p"},".form-check")," that don\u2019t have any label text. Remember to still provide some form of label for assistive technologies (for instance, using ",Object(o.b)("inlineCode",{parentName:"p"},"aria-label"),")."),Object(o.b)("h3",{id:"examples-of-documentation---radio-without-labels"},"Examples oF Documentation - Radio without Labels"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">\n</div>\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Radio/radios.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=components-radio-radios.afda1694a9a92002a462.js.map