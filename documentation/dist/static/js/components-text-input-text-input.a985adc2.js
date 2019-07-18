(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./components/Text-Input/text-Input.mdx":function(e,a,o){"use strict";o.r(a),o.d(a,"default",function(){return x});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),n=o("./node_modules/docz/dist/index.esm.js"),r=o("./node_modules/reactstrap/es/Button.js"),p=o("./node_modules/reactstrap/es/Form.js"),i=o("./node_modules/reactstrap/es/FormGroup.js"),m=o("./node_modules/reactstrap/es/FormFeedback.js"),s=o("./node_modules/reactstrap/es/Label.js"),c=o("./node_modules/reactstrap/es/Input.js"),d=o("./node_modules/reactstrap/es/FormText.js"),b={},u="wrapper";function x(e){var a=e.components,o=Object(t.a)(e,["components"]);return Object(l.b)(u,Object.assign({},b,o,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"text-input"},"Text Input"),Object(l.b)("p",null,"Use the provided classes to opt into their customized displays for more consistent rendering across browsers and devices."),Object(l.b)("p",null,"Be sure to use an appropriate ",Object(l.b)("inlineCode",{parentName:"p"},"type")," attribute on all inputs (e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"email")," for email address or ",Object(l.b)("inlineCode",{parentName:"p"},"number")," for numerical information) to take advantage of newer input controls like email verification, number selection and more."),Object(l.b)("h2",{id:"input-type"},"Input Type"),Object(l.b)("h3",{id:"static-text-box"},"Static Text Box"),Object(l.b)(n.c,{__position:0,__code:'<FormGroup>\n  <Label for="exampleEmail">Input without validation</Label>\n  <Input />\n  <FormFeedback>You will not be able to see this</FormFeedback>\n  <FormText>Example help text that remains unchanged.</FormText>\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleEmail",mdxType:"Label"},"Input without validation"),Object(l.b)(c.a,{mdxType:"Input"}),Object(l.b)(m.a,{mdxType:"FormFeedback"},"You will not be able to see this"),Object(l.b)(d.a,{mdxType:"FormText"},"Example help text that remains unchanged."))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="exampleStaticInput">Plain Text (Static)</label>\n        <input id="exampleStaticInput" plaintext value="Some plain text/ static value" readonly="readonly">\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"email"},"Email"),Object(l.b)(n.c,{__position:1,__code:'<FormGroup>\n  <Label for="exampleEmail">Email</Label>\n  <Input\n    type="email"\n    name="email"\n    id="exampleEmail"\n    placeholder="with a placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleEmail",mdxType:"Label"},"Email"),Object(l.b)(c.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"with a placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="exampleEmail">Email</label>\n        <input type="email" class="form-control" id="exampleEmail" name="email" placeholder="with a placeholder">\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"password"},"Password"),Object(l.b)(n.c,{__position:2,__code:'<FormGroup>\n  <Label for="examplePassword">Password</Label>\n  <Input\n    type="password"\n    name="password"\n    id="examplePassword"\n    placeholder="password placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"examplePassword",mdxType:"Label"},"Password"),Object(l.b)(c.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="examplePassword">Password</label>\n        <input type="password" class="form-control" name="password" id="examplePassword" placeholder="password placeholder">\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"url"},"URL"),Object(l.b)(n.c,{__position:3,__code:'<FormGroup>\n  <Label for="exampleUrl">Url</Label>\n  <Input\n    type="url"\n    name="url"\n    id="exampleUrl"\n    placeholder="url placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleUrl",mdxType:"Label"},"Url"),Object(l.b)(c.a,{type:"url",name:"url",id:"exampleUrl",placeholder:"url placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n\n    <div class="form-group">\n        <label for="exampleUrl">URL</label>\n        <input type="url" class="form-control" name="url" id="exampleUrl" placeholder="url placeholder">\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"datetime-picker"},"Datetime Picker"),Object(l.b)(n.c,{__position:4,__code:'<FormGroup>\n  <Label for="exampleDatetime">Datetime</Label>\n  <Input\n    type="datetime"\n    name="datetime"\n    id="exampleDatetime"\n    placeholder="datetime placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleDatetime",mdxType:"Label"},"Datetime"),Object(l.b)(c.a,{type:"datetime",name:"datetime",id:"exampleDatetime",placeholder:"datetime placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleDatetime"> Datetime </Label>\n        <input type="datetime" class="form-control" name="datetime" id="exampleDatetime" placeholder="datetime placeholder">\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"date-picker"},"Date Picker"),Object(l.b)(n.c,{__position:5,__code:'<FormGroup>\n  <Label for="exampleDate">Date</Label>\n  <Input\n    type="date"\n    name="date"\n    id="exampleDate"\n    placeholder="date placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleDate",mdxType:"Label"},"Date"),Object(l.b)(c.a,{type:"date",name:"date",id:"exampleDate",placeholder:"date placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleDate">Date</Label>\n        <input type="date" class="form-control" name="date" id="exampleDate" placeholder="date placeholder">\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"time"},"Time"),Object(l.b)(n.c,{__position:6,__code:'<FormGroup>\n  <Label for="exampleTime">Time</Label>\n  <Input\n    type="time"\n    name="time"\n    id="exampleTime"\n    placeholder="time placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleTime",mdxType:"Label"},"Time"),Object(l.b)(c.a,{type:"time",name:"time",id:"exampleTime",placeholder:"time placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleTime">Time</Label>\n        <Input type="time" class="form-control" name="time" id="exampleTime" placeholder="time placeholder">\n    </div>\n<form>\n')),Object(l.b)("h3",{id:"colour-picker"},"Colour Picker"),Object(l.b)(n.c,{__position:7,__code:'<FormGroup>\n  <Label for="exampleColor">Color</Label>\n  <Input\n    type="color"\n    name="color"\n    id="exampleColor"\n    placeholder="color placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleColor",mdxType:"Label"},"Color"),Object(l.b)(c.a,{type:"color",name:"color",id:"exampleColor",placeholder:"color placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleColor">Color</Label>\n        \x3c!--Default color set to white --\x3e\n        <input type="color" class="form-control" name="color" id="exampleColor" placeholder="color placeholder" value="#ffffff">\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"search"},"Search"),Object(l.b)(n.c,{__position:8,__code:'<FormGroup>\n  <Label for="exampleSearch">Search</Label>\n  <Input\n    type="search"\n    name="search"\n    id="exampleSearch"\n    placeholder="search placeholder"\n  />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleSearch",mdxType:"Label"},"Search"),Object(l.b)(c.a,{type:"search",name:"search",id:"exampleSearch",placeholder:"search placeholder",mdxType:"Input"}))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleSearch">Search</Label>\n        <input type="search" name="search" id="exampleSearch" placeholder="search placeholder" required>\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"text-area"},"Text Area"),Object(l.b)(n.c,{__position:9,__code:'<FormGroup>\n  <Label for="exampleText">Text Area</Label>\n  <Input type="textarea" name="text" id="exampleText" />\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleText",mdxType:"Label"},"Text Area"),Object(l.b)(c.a,{type:"textarea",name:"text",id:"exampleText",mdxType:"Input"}))),Object(l.b)("p",null,"For file inputs, swap the ",Object(l.b)("inlineCode",{parentName:"p"},".form-control")," for ",Object(l.b)("inlineCode",{parentName:"p"},".form-control-file"),"."),Object(l.b)("h3",{id:"file-selector"},"File Selector"),Object(l.b)(n.c,{__position:10,__code:'<FormGroup>\n  <Label for="exampleFile">File</Label>\n  <Input type="file" name="file" id="exampleFile" />\n  <FormText color="muted">\n    This is some placeholder block-level help text for the above input. It\'s a\n    bit lighter and easily wraps to a new line.\n  </FormText>\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleFile",mdxType:"Label"},"File"),Object(l.b)(c.a,{type:"file",name:"file",id:"exampleFile",mdxType:"Input"}),Object(l.b)(d.a,{color:"muted",mdxType:"FormText"},"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="exampleFormControlFile1">Example file input</label>\n        <input type="file" class="form-control-file" id="exampleFormControlFile1">\n    </div>\n</form>\n')),Object(l.b)("h2",{id:"select"},"Select"),Object(l.b)("h3",{id:"select-menu"},"Select Menu"),Object(l.b)("p",null,"Custom ",Object(l.b)("inlineCode",{parentName:"p"},"<select>")," menus only require a custom class ",Object(l.b)("inlineCode",{parentName:"p"},".custom-select")," to trigger the custom styles. Custom styles are limited to the ",Object(l.b)("inlineCode",{parentName:"p"},"<select>")," initial appearance and cannot modify the ",Object(l.b)("inlineCode",{parentName:"p"},"<option>")," due to browser limitations."),Object(l.b)("p",null,"You may also choose from small or large custom selects to match similarly sized text inputs.\nsubmissions"),Object(l.b)(n.c,{__position:11,__code:'<FormGroup>\n  <Label for="exampleSelect">Select</Label>\n  <Input type="select" name="select" id="exampleSelect">\n    <option>1</option>\n    <option>2</option>\n    <option>3</option>\n    <option>4</option>\n    <option>5</option>\n  </Input>\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleSelect",mdxType:"Label"},"Select"),Object(l.b)(c.a,{type:"select",name:"select",id:"exampleSelect",mdxType:"Input"},Object(l.b)("option",null,"1"),Object(l.b)("option",null,"2"),Object(l.b)("option",null,"3"),Object(l.b)("option",null,"4"),Object(l.b)("option",null,"5")))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <select class="custom-select" required>\n        <option value="">Open this select menu</option>\n        <option value="1">One</option>\n        <option value="2">Two</option>\n        <option value="3">Three</option>\n        <option value="4">Four</option>\n        <option value="5">Five</option>\n        </select>\n    </div>\n</form>\n')),Object(l.b)("h3",{id:"multiple-select"},"Multiple Select"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"multiple")," attribute is also supported. As is the size attribute along with multiple."),Object(l.b)(n.c,{__position:12,__code:'<FormGroup>\n  <Label for="exampleSelectMulti">Select Multiple</Label>\n  <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>\n    <option>1</option>\n    <option>2</option>\n    <option>3</option>\n    <option>4</option>\n    <option>5</option>\n  </Input>\n</FormGroup>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleSelectMulti",mdxType:"Label"},"Select Multiple"),Object(l.b)(c.a,{type:"select",name:"selectMulti",id:"exampleSelectMulti",multiple:!0,mdxType:"Input"},Object(l.b)("option",null,"1"),Object(l.b)("option",null,"2"),Object(l.b)("option",null,"3"),Object(l.b)("option",null,"4"),Object(l.b)("option",null,"5")))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleSelectMulti">Select Multiple</Label>\n        <select multiple class="form-control" id="exampleFormControlSelect2">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n        </select>\n    </div>\n</form>\n')),Object(l.b)("h2",{id:"validation"},"Validation"),Object(l.b)("p",null,"Provide valuable, actionable feedback to your users with HTML5 form validation\u2013available in all our supported browsers. Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript."),Object(l.b)("p",null,"We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile)."),Object(l.b)(n.c,{__position:13,__code:'<Form>\n  <FormGroup>\n    <Label for="exampleEmail">Valid input</Label>\n    <Input valid />\n    <FormFeedback valid>Great! that name is available</FormFeedback>\n  </FormGroup>\n  <FormGroup>\n    <Label for="examplePassword">Invalid input</Label>\n    <Input invalid />\n    <FormFeedback>Oh no! that name is already taken</FormFeedback>\n  </FormGroup>\n  <FormGroup className="mb-4">\n    <Label for="exampleEmail">Valid input</Label>\n    <Input valid />\n    <FormFeedback valid tooltip>\n      Great! that name is available\n    </FormFeedback>\n  </FormGroup>\n  <FormGroup>\n    <Label for="examplePassword">Invalid input</Label>\n    <Input invalid />\n    <FormFeedback tooltip>Oh no! that name is already taken</FormFeedback>\n  </FormGroup>\n</Form>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Button:r.a,Form:p.a,FormGroup:i.a,FormFeedback:m.a,Label:s.a,Input:c.a,FormText:d.a},mdxType:"Playground"},Object(l.b)(p.a,{mdxType:"Form"},Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleEmail",mdxType:"Label"},"Valid input"),Object(l.b)(c.a,{valid:!0,mdxType:"Input"}),Object(l.b)(m.a,{valid:!0,mdxType:"FormFeedback"},"Great! that name is available")),Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"examplePassword",mdxType:"Label"},"Invalid input"),Object(l.b)(c.a,{invalid:!0,mdxType:"Input"}),Object(l.b)(m.a,{mdxType:"FormFeedback"},"Oh no! that name is already taken")),Object(l.b)(i.a,{className:"mb-4",mdxType:"FormGroup"},Object(l.b)(s.a,{for:"exampleEmail",mdxType:"Label"},"Valid input"),Object(l.b)(c.a,{valid:!0,mdxType:"Input"}),Object(l.b)(m.a,{valid:!0,tooltip:!0,mdxType:"FormFeedback"},"Great! that name is available")),Object(l.b)(i.a,{mdxType:"FormGroup"},Object(l.b)(s.a,{for:"examplePassword",mdxType:"Label"},"Invalid input"),Object(l.b)(c.a,{invalid:!0,mdxType:"Input"}),Object(l.b)(m.a,{tooltip:!0,mdxType:"FormFeedback"},"Oh no! that name is already taken")))),Object(l.b)("h3",{id:"how-it-works"},"How it Works"),Object(l.b)("p",null,"HTML form validation is applied via CSS\u2019s two pseudo-classes, ",Object(l.b)("inlineCode",{parentName:"p"},":invalid")," and ",Object(l.b)("inlineCode",{parentName:"p"},":valid"),". It applies to ",Object(l.b)("inlineCode",{parentName:"p"},"<input>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<select>"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"<textarea>")," elements. Bootstrap scopes the ",Object(l.b)("inlineCode",{parentName:"p"},":invalid")," and ",Object(l.b)("inlineCode",{parentName:"p"},":valid")," styles to parent ",Object(l.b)("inlineCode",{parentName:"p"},".was-validated")," class, usually applied to the ",Object(l.b)("inlineCode",{parentName:"p"},"<form>"),". Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted). To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the .was-validated class from the ",Object(l.b)("inlineCode",{parentName:"p"},"<form>")," again after submission. As a fallback, ",Object(l.b)("inlineCode",{parentName:"p"},".is-invalid")," and ",Object(l.b)("inlineCode",{parentName:"p"},".is-valid")," classes may be used instead of the pseudo-classes for server side validation. They do not require a .was-validated parent class."),Object(l.b)("p",null,"Due to constraints in how CSS works, we cannot (at present) apply styles to a ",Object(l.b)("inlineCode",{parentName:"p"},"<label>")," that comes before a form control in the DOM without the help of custom JavaScript. All modern browsers support the constraint validation API, a series of JavaScript methods for validating form controls. Feedback messages may utilize the browser defaults (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS. You may provide custom validity messages with setCustomValidity in JavaScript. With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults."),Object(l.b)("h3",{id:"server-side"},"Server side"),Object(l.b)("p",null,"We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with ",Object(l.b)("inlineCode",{parentName:"p"},".is-invalid")," and ",Object(l.b)("inlineCode",{parentName:"p"},".is-valid.")," Note that ",Object(l.b)("inlineCode",{parentName:"p"},".invalid-feedback")," is also supported with these classes."))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Text-Input/text-Input.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=components-text-input-text-input.910107a09eadbc7541a1.js.map