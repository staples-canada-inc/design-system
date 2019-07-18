(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./components/Checkbox/checkboxes.mdx":function(e,o,c){"use strict";c.r(o),c.d(o,"default",function(){return u});var n=c("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(c("./node_modules/react/index.js"),c("./node_modules/@mdx-js/react/dist/index.es.js")),a=c("./node_modules/docz/dist/index.esm.js"),l=c("./node_modules/reactstrap/es/Label.js"),b=c("./node_modules/reactstrap/es/Input.js"),i=c("./node_modules/reactstrap/es/CustomInput.js"),p=c("./node_modules/reactstrap/es/Form.js"),s=c("./node_modules/reactstrap/es/FormGroup.js"),r={},m="wrapper";function u(e){var o=e.components,c=Object(n.a)(e,["components"]);return Object(t.b)(m,Object.assign({},r,c,{components:o,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"checkbox"},"Checkbox"),Object(t.b)("p",null,"Default checkboxes improved with the help of ",Object(t.b)("inlineCode",{parentName:"p"},".form-check"),", a single class that improves the layout and behavior of their HTML elements. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many."),Object(t.b)("p",null,"Checkboxes are built to support HTML-based form validation and provide concise, accessible labels. As such, our ",Object(t.b)("inlineCode",{parentName:"p"},"<input>")," and ",Object(t.b)("inlineCode",{parentName:"p"},"<label>")," are sibling elements as opposed to an ",Object(t.b)("inlineCode",{parentName:"p"},"<input>")," within a ",Object(t.b)("inlineCode",{parentName:"p"},"<label>"),". This is slightly more verbose as you must specify id and for attributes to relate the ",Object(t.b)("inlineCode",{parentName:"p"},"<input>")," and ",Object(t.b)("inlineCode",{parentName:"p"},"<label>"),"."),Object(t.b)(a.c,{__position:0,__code:'<Form>\n  <FormGroup>\n    <CustomInput\n      type="checkbox"\n      id="exampleCustomCheckbox1"\n      label="Check this out"\n    />\n  </FormGroup>\n</Form>',__scope:{props:this?this.props:c,Playground:a.c,Props:a.d,Label:l.a,Input:b.a,CustomInput:i.a,Form:p.a,FormGroup:s.a},mdxType:"Playground"},Object(t.b)(p.a,{mdxType:"Form"},Object(t.b)(s.a,{mdxType:"FormGroup"},Object(t.b)(i.a,{type:"checkbox",id:"exampleCustomCheckbox1",label:"Check this out",mdxType:"CustomInput"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n    <input class="form-check-input" type="checkbox" name="exampleCustomCheckbox" id="customCheckbox1" value="option1" checked>\n    <label class="form-check-label" for="customCheckbox1">\n        Check this out\n    </label>\n</div>\n')),Object(t.b)("h3",{id:"disabled-checkbox"},"Disabled Checkbox"),Object(t.b)("p",null,"Disabled checkboxes and radios are supported. The disabled attribute will apply a lighter color to help indicate the input\u2019s state."),Object(t.b)(a.c,{__position:1,__code:'<Form>\n  <FormGroup>\n    <CustomInput\n      type="checkbox"\n      id="exampleCustomCheckbox2"\n      label="But don\'t check this"\n      disabled\n    />\n  </FormGroup>\n</Form>',__scope:{props:this?this.props:c,Playground:a.c,Props:a.d,Label:l.a,Input:b.a,CustomInput:i.a,Form:p.a,FormGroup:s.a},mdxType:"Playground"},Object(t.b)(p.a,{mdxType:"Form"},Object(t.b)(s.a,{mdxType:"FormGroup"},Object(t.b)(i.a,{type:"checkbox",id:"exampleCustomCheckbox2",label:"But don't check this",disabled:!0,mdxType:"CustomInput"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n    <input class="form-check-input" type="checkbox" name="exampleCustomCheckbox1" id="customCheckbox3" value="option3" disabled>\n    <label class="form-check-label" for="customCheckbox3">\n        But don\'t check this\n    </label>\n</div>\n')),Object(t.b)("h3",{id:"default-stacked"},"Default (Stacked)"),Object(t.b)("p",null,"By default, any number of checkboxes and radios that are immediate siblings will be vertically stacked and appropriately spaced with ",Object(t.b)("inlineCode",{parentName:"p"},".form-check"),"."),Object(t.b)(a.c,{__position:2,__code:'<Form>\n  <FormGroup>\n    <CustomInput\n      type="checkbox"\n      id="exampleCustomCheckbox3"\n      label="Default checkbox"\n    />\n  </FormGroup>\n  <FormGroup>\n    <CustomInput\n      type="checkbox"\n      id="exampleCustomCheckbox4"\n      label="Default checkbox"\n    />\n  </FormGroup>\n</Form>',__scope:{props:this?this.props:c,Playground:a.c,Props:a.d,Label:l.a,Input:b.a,CustomInput:i.a,Form:p.a,FormGroup:s.a},mdxType:"Playground"},Object(t.b)(p.a,{mdxType:"Form"},Object(t.b)(s.a,{mdxType:"FormGroup"},Object(t.b)(i.a,{type:"checkbox",id:"exampleCustomCheckbox3",label:"Default checkbox",mdxType:"CustomInput"})),Object(t.b)(s.a,{mdxType:"FormGroup"},Object(t.b)(i.a,{type:"checkbox",id:"exampleCustomCheckbox4",label:"Default checkbox",mdxType:"CustomInput"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n    <label class="form-check-label" for="defaultCheck1">\n        Default checkbox\n    </label>\n</div>\n<div class="form-check">\n    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">\n    <label class="form-check-label" for="defaultCheck2">\n        Disabled checkbox\n    </label>\n</div>\n')),Object(t.b)("h3",{id:"inline"},"Inline"),Object(t.b)("p",null,"Group checkboxes or radios on the same horizontal row by adding ",Object(t.b)("inlineCode",{parentName:"p"},".form-check-inline")," to any ",Object(t.b)("inlineCode",{parentName:"p"},".form-check"),"."),Object(t.b)(a.c,{__position:3,__code:'<Form>\n  <FormGroup check inline>\n    <CustomInput\n      type="checkbox"\n      id="exampleCustomCheckbox5"\n      label="Inline checkbox 1"\n    />\n  </FormGroup>\n  <FormGroup check inline>\n    <CustomInput\n      type="checkbox"\n      id="exampleCustomCheckbox6"\n      label="Inline checkbox 2"\n    />\n  </FormGroup>\n  <FormGroup check inline>\n    <CustomInput\n      type="checkbox"\n      id="exampleCustomCheckbox7"\n      label="Inline checkbox 3"\n    />\n  </FormGroup>\n</Form>',__scope:{props:this?this.props:c,Playground:a.c,Props:a.d,Label:l.a,Input:b.a,CustomInput:i.a,Form:p.a,FormGroup:s.a},mdxType:"Playground"},Object(t.b)(p.a,{mdxType:"Form"},Object(t.b)(s.a,{check:!0,inline:!0,mdxType:"FormGroup"},Object(t.b)(i.a,{type:"checkbox",id:"exampleCustomCheckbox5",label:"Inline checkbox 1",mdxType:"CustomInput"})),Object(t.b)(s.a,{check:!0,inline:!0,mdxType:"FormGroup"},Object(t.b)(i.a,{type:"checkbox",id:"exampleCustomCheckbox6",label:"Inline checkbox 2",mdxType:"CustomInput"})),Object(t.b)(s.a,{check:!0,inline:!0,mdxType:"FormGroup"},Object(t.b)(i.a,{type:"checkbox",id:"exampleCustomCheckbox7",label:"Inline checkbox 3",mdxType:"CustomInput"})))),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check form-check-inline">\n    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">\n    <label class="form-check-label" for="inlineCheckbox1">Inline checkbox 1</label>\n</div>\n<div class="form-check form-check-inline">\n    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">\n    <label class="form-check-label" for="inlineCheckbox2">Inline checkbox 2</label>\n</div>\n<div class="form-check form-check-inline">\n    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">\n    <label class="form-check-label" for="inlineCheckbox3">Inline checkbox 3</label>\n</div>\n')),Object(t.b)("h3",{id:"assistive-technology"},"Assistive Technology"),Object(t.b)("p",null,"Add ",Object(t.b)("inlineCode",{parentName:"p"},".position-static")," to inputs within ",Object(t.b)("inlineCode",{parentName:"p"},".form-check")," that don\u2019t have any label text. Remember to still provide some form of label for assistive technologies (for instance, using ",Object(t.b)("inlineCode",{parentName:"p"},"aria-label"),")."),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-check">\n    <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">\n</div>\n')))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Checkbox/checkboxes.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=components-checkbox-checkboxes.efe0cff7b339dd0cc7e9.js.map