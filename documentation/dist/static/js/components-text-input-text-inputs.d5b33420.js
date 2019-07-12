(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./components/Text-Input/text_inputs.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return i});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),r={},l="wrapper";function i(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)(l,Object.assign({},r,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"forms"},"Forms"),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Bootstrap's form controls expand on ","[our Rebooted form styles]",'({{< docsref "/content/reboot#forms" >}}) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.'),Object(a.b)("p",null,"Be sure to use an appropriate ",Object(a.b)("inlineCode",{parentName:"p"},"type")," attribute on all inputs (e.g., ",Object(a.b)("inlineCode",{parentName:"p"},"email")," for email address or ",Object(a.b)("inlineCode",{parentName:"p"},"number")," for numerical information) to take advantage of newer input controls like email verification, number selection, and more."),Object(a.b)("p",null,"Here's a quick example to demonstrate Bootstrap's form styles. {{Keep reading for documentation on required classes, form layout, and more.}}"),Object(a.b)("h3",{id:"text-input-for-static-text-box"},"Text Input for Static Text Box"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="exampleStaticInput">Plain Text (Static)</label>\n        <input id="exampleStaticInput" plaintext value="Some plain text/ static value" readonly="readonly">\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-email"},"Text Input for email"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="exampleEmail">Email</label>\n        <input type="email" class="form-control" id="exampleEmail" name="email" placeholder="with a placeholder">\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-password"},"Text Input for Password"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="examplePassword">Password</label>\n        <input type="password" class="form-control" name="password" id="examplePassword" placeholder="password placeholder">\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-urls"},"Text Input for URLs"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n\n    <div class="form-group">\n        <label for="exampleUrl">URL</label>\n        <input type="url" class="form-control" name="url" id="exampleUrl" placeholder="url placeholder">\n    </div>\n</form>\n')),Object(a.b)("h2",{id:"form-controls"},"Form controls"),Object(a.b)("p",null,"Textual form controls\u2014like ",Object(a.b)("inlineCode",{parentName:"p"},"<input>"),"s, ",Object(a.b)("inlineCode",{parentName:"p"},"<select>"),"s, and ",Object(a.b)("inlineCode",{parentName:"p"},"<textarea>"),"s\u2014are styled with the ",Object(a.b)("inlineCode",{parentName:"p"},".form-control")," class. Included are styles for general appearance, focus state, sizing, and more."),Object(a.b)("p",null,"Be sure to explore our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"#custom-forms"}),"custom forms")," to further style ",Object(a.b)("inlineCode",{parentName:"p"},"<select>"),"s."),Object(a.b)("h3",{id:"text-input-for-numbers"},"Text Input for Numbers"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleNumber"> Number </Label>\n        <input type="number" class="form-control" name="number" id="exampleNumber" placeholder="number placeholder">\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-datetime"},"Text Input for Datetime"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleDatetime"> Datetime </Label>\n        <input type="datetime" class="form-control" name="datetime" id="exampleDatetime" placeholder="datetime placeholder">\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-date"},"Text Input for Date"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleDate">Date</Label>\n        <input type="date" class="form-control" name="date" id="exampleDate" placeholder="date placeholder">\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-time"},"Text Input for Time"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleTime">Time</Label>\n        <Input type="time" class="form-control" name="time" id="exampleTime" placeholder="time placeholder">\n    </div>\n<form>\n')),Object(a.b)("h3",{id:"text-input-for-colour"},"Text Input for Colour"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleColor">Color</Label>\n        <input type="color" class="form-control" name="color" id="exampleColor" placeholder="color placeholder">\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-search"},"Text Input for Search"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleSearch">Search</Label>\n        <input type="search" name="search" id="exampleSearch" placeholder="search placeholder" required>\n    </div>\n</form>\n')),Object(a.b)("h2",{id:"select-menu"},"Select menu"),Object(a.b)("p",null,"Custom ",Object(a.b)("inlineCode",{parentName:"p"},"<select>")," menus need only a custom class, ",Object(a.b)("inlineCode",{parentName:"p"},".custom-select")," to trigger the custom styles. Custom styles are limited to the ",Object(a.b)("inlineCode",{parentName:"p"},"<select>\u2019"),"s initial appearance and cannot modify the ",Object(a.b)("inlineCode",{parentName:"p"},"<option>"),"s due to browser limitations."),Object(a.b)("p",null,"You may also choose from small and large custom selects to match our similarly sized text inputs."),Object(a.b)("h3",{id:"text-input-for-select-menu"},"Text Input for Select Menu"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <label for="exampleSelect">Select</label>\n        <select class="form-control" id="exampleFormControlSelect1">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n        </select>\n    </div>\n</form>\n')),Object(a.b)("h2",{id:"select-multiple"},"Select Multiple"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"multiple")," attribute is also supported. As is the size attribute along with multiple."),Object(a.b)("h3",{id:"text-input-for-multiple-select-menu"},"Text Input for Multiple Select Menu"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group">\n        <Label for="exampleSelectMulti">Select Multiple</Label>\n        <select multiple class="form-control" id="exampleFormControlSelect2">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n        </select>\n    </div>\n</form>\n')),Object(a.b)("h3",{id:"text-input-for-text-area"},"Text Input for Text Area"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<div class="form-group">\n    <label for="exampleFormControlTextarea1">Label</label>\n    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Value"></textarea>\n</div>\n')),Object(a.b)("p",null,"For file inputs, swap the ",Object(a.b)("inlineCode",{parentName:"p"},".form-control")," for ",Object(a.b)("inlineCode",{parentName:"p"},".form-control-file"),"."),Object(a.b)("h3",{id:"text-input-for-file-input"},"Text Input for File Input"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n<div class="form-group">\n    <label for="exampleFormControlFile1">Example file input</label>\n    <input type="file" class="form-control-file" id="exampleFormControlFile1">\n</div>\n</form>\n')),Object(a.b)("h3",{id:"validation"},"Validation"),Object(a.b)("p",null,"Provide valuable, actionable feedback to your users with HTML5 form validation\u2013available in all our supported browsers. Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript."),Object(a.b)("p",null,"We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile)."),Object(a.b)("h3",{id:"how-it-works"},"How it works"),Object(a.b)("p",null,"Here\u2019s how form validation works with Bootstrap:"),Object(a.b)("p",null,"HTML form validation is applied via CSS\u2019s two pseudo-classes, :invalid and :valid. It applies to ",Object(a.b)("inlineCode",{parentName:"p"},"<input>"),", ",Object(a.b)("inlineCode",{parentName:"p"},"<select>"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"<textarea>")," elements. Bootstrap scopes the ",Object(a.b)("inlineCode",{parentName:"p"},":invalid")," and ",Object(a.b)("inlineCode",{parentName:"p"},":valid")," styles to parent ",Object(a.b)("inlineCode",{parentName:"p"},".was-validated")," class, usually applied to the ",Object(a.b)("inlineCode",{parentName:"p"},"<form>"),". Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted). To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the .was-validated class from the ",Object(a.b)("inlineCode",{parentName:"p"},"<form>")," again after submission. As a fallback, ",Object(a.b)("inlineCode",{parentName:"p"},".is-invalid")," and ",Object(a.b)("inlineCode",{parentName:"p"},".is-valid")," classes may be used instead of the pseudo-classes for server side validation. They do not require a .was-validated parent class."),Object(a.b)("p",null,"Due to constraints in how CSS works, we cannot (at present) apply styles to a ",Object(a.b)("inlineCode",{parentName:"p"},"<label>")," that comes before a form control in the DOM without the help of custom JavaScript. All modern browsers support the constraint validation API, a series of JavaScript methods for validating form controls. Feedback messages may utilize the browser defaults (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS. You may provide custom validity messages with setCustomValidity in JavaScript. With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults."),Object(a.b)("h3",{id:"server-side"},"Server side"),Object(a.b)("p",null,"We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with ",Object(a.b)("inlineCode",{parentName:"p"},".is-invalid")," and ",Object(a.b)("inlineCode",{parentName:"p"},".is-valid.")," Note that ",Object(a.b)("inlineCode",{parentName:"p"},".invalid-feedback")," is also supported with these classes."))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Text-Input/text_inputs.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=components-text-input-text-inputs.7fe109db3117195378ab.js.map