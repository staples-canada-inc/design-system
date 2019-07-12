(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./components/Form/form-grid.md":function(e,o,l){"use strict";l.r(o),l.d(o,"default",function(){return r});var n=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(l("./node_modules/react/index.js"),l("./node_modules/@mdx-js/react/dist/index.es.js")),a=(l("./node_modules/docz/dist/index.esm.js"),{}),i="wrapper";function r(e){var o=e.components,l=Object(n.a)(e,["components"]);return Object(t.b)(i,Object.assign({},a,l,{components:o,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"form-grid"},"Form Grid"),Object(t.b)("p",null,"More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options."),Object(t.b)("p",null,"Here is an example of two individual ",Object(t.b)("inlineCode",{parentName:"p"},'"column"')," fields in a row:"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="row">\n        <div class="col">\n            <input type="text" class="form-control" placeholder="First name">\n        </div>\n        <div class="col">\n            <input type="text" class="form-control" placeholder="Last name">\n        </div>\n    </div>\n</form>\n')),Object(t.b)("br",null),"### Form Row",Object(t.b)("p",null,"You may also swap ",Object(t.b)("inlineCode",{parentName:"p"},".row")," for ",Object(t.b)("inlineCode",{parentName:"p"},".form-row"),", a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts."),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-row">\n        <div class="col">\n            <input type="text" class="form-control" placeholder="First name">\n        </div>\n        <div class="col">\n            <input type="text" class="form-control" placeholder="Last name">\n        </div>\n    </div>\n</form>\n')),Object(t.b)("p",null,"More complex layouts can also be created with the grid system.\nHere is one example:"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-row">\n        <div class="form-group col-md-6">\n            <label for="inputEmail4">Email</label>\n            <input type="email" class="form-control" id="inputEmail4" placeholder="with a placeholder">\n        </div>\n        <div class="form-group col-md-6">\n            <label for="inputPassword4">Password</label>\n            <input type="password" class="form-control" id="inputPassword4" placeholder="password placeholder">\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="inputAddress">Address</label>\n        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">\n    </div>\n    <div class="form-group">\n        <label for="inputAddress2">Address 2</label>\n        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">\n    </div>\n    <div class="form-row">\n        <div class="form-group col-md-6">\n            <label for="inputCity">City</label>\n            <input type="text" class="form-control" id="inputCity">\n        </div>\n        <div class="form-group col-md-4">\n            <label for="inputState">State</label>\n            <select id="inputState" class="form-control">\n                <option selected>Choose...</option>\n                <option>...</option>\n            </select>\n        </div>\n        <div class="form-group col-md-2">\n            <label for="inputPostalCode">Postal Code</label>\n            <input type="text" class="form-control" id="inputPostalCode">\n        </div>\n    </div>\n    <button type="submit" class="btn btn-primary float-right">SUBMIT</button>\n</form>\n')),Object(t.b)("br",null),"### Horizontal Form",Object(t.b)("p",null,"Create horizontal forms with the grid by adding the ",Object(t.b)("inlineCode",{parentName:"p"},".row")," class to form groups and using the ",Object(t.b)("inlineCode",{parentName:"p"},".col-*-*")," classes to specify the width of your labels and controls. Be sure to add ",Object(t.b)("inlineCode",{parentName:"p"},".col-form-label")," to your ",Object(t.b)("inlineCode",{parentName:"p"},"<label>")," as well so they\u2019re vertically centered with their associated form controls."),Object(t.b)("p",null,"At times, you may need to use margin or padding utilities to create that perfect alignment. For example, we\u2019ve removed the ",Object(t.b)("inlineCode",{parentName:"p"},"padding-top")," on our stacked radio inputs label to better align the text baseline."),Object(t.b)("p",null,"Here is an example of a somehwat more complex horizontal form with input fields, checkboxes and radio buttons:"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group row">\n        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>\n        <div class="col-sm-10">\n            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">\n        </div>\n    </div>\n    <div class="form-group row">\n        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>\n        <div class="col-sm-10">\n            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">\n        </div>\n    </div>\n    <fieldset class="form-group">\n        <div class="row">\n            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>\n            <div class="col-sm-10">\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>\n                    <label class="form-check-label" for="gridRadios1"> First radio</label>\n            </div>\n            <div class="form-check">\n                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">\n                <label class="form-check-label" for="gridRadios2"> Second radio</label>\n            </div>\n            <div class="form-check disabled">\n                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>\n                <label class="form-check-label" for="gridRadios3">Third disabled radio</label>\n            </div>\n        </div>\n    </div>\n    </fieldset>\n        <div class="form-group row">\n            <div class="col-sm-2">Checkbox</div>\n            <div class="col-sm-10">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" id="gridCheck1">\n                    <label class="form-check-label" for="gridCheck1">Example checkbox</label>\n                </div>\n            </div>\n        </div>\n        <div class="form-group row">\n            <div class="col-sm-10">\n                <button type="submit" class="btn btn-primary">Sign in</button>\n            </div>\n        </div>\n</form>\n')),Object(t.b)("br",null),"### Horizontal Form Label Sizing",Object(t.b)("p",null,"Be sure to use the corresponding ",Object(t.b)("inlineCode",{parentName:"p"},".col-form-label-sm")," or ",Object(t.b)("inlineCode",{parentName:"p"},".col-form-label-lg")," with your ",Object(t.b)("inlineCode",{parentName:"p"},"<label>")," or ",Object(t.b)("inlineCode",{parentName:"p"},"<legend>")," so that it is correctly sized to ",Object(t.b)("inlineCode",{parentName:"p"},".form-control-lg")," or ",Object(t.b)("inlineCode",{parentName:"p"},".form-control-sm"),"."),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-group row">\n        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>\n        <div class="col-sm-10">\n            <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">\n        </div>\n    </div>\n    <div class="form-group row">\n        <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>\n        <div class="col-sm-10">\n            <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">\n        </div>\n    </div>\n    <div class="form-group row">\n        <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>\n        <div class="col-sm-10">\n            <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">\n        </div>\n    </div>\n</form>\n')),Object(t.b)("br",null),"### Column Sizing",Object(t.b)("p",null,"As shown in the previous examples, our grid system allows you to place any number of ",Object(t.b)("inlineCode",{parentName:"p"},".cols")," within a ",Object(t.b)("inlineCode",{parentName:"p"},".row")," or ",Object(t.b)("inlineCode",{parentName:"p"},".form-row"),". They will split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining ",Object(t.b)("inlineCode",{parentName:"p"},".cols"),"equally split the rest, with specific column classes like ",Object(t.b)("inlineCode",{parentName:"p"},".col-7"),"."),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-row">\n        <div class="col-7">\n            <input type="text" class="form-control" placeholder="City">\n        </div>\n        <div class="col">\n            <input type="text" class="form-control" placeholder="State">\n        </div>\n        <div class="col">\n            <input type="text" class="form-control" placeholder="Zip">\n        </div>\n    </div>\n</form>\n')),Object(t.b)("br",null),"### Auto-sizing The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. In other words, the column sizes itself according to the content.",Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{}),'<form>\n    <div class="form-row align-items-center">\n        <div class="col-auto">\n            <label class="sr-only" for="inlineFormInput">Name</label>\n            <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">\n        </div>\n        <div class="col-auto">\n            <label class="sr-only" for="inlineFormInputGroup">Username</label>\n            <div class="input-group mb-2">\n                <div class="input-group-prepend">\n                    <div class="input-group-text">@</div>\n                </div>\n                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">\n            </div>\n        </div>\n        <div class="col-auto">\n            <div class="form-check mb-2">\n                <input class="form-check-input" type="checkbox" id="autoSizingCheck">\n                <label class="form-check-label" for="autoSizingCheck">Remember me</label>\n            </div>\n        </div>\n        <div class="col-auto">\n            <button type="submit" class="btn btn-primary mb-2">Submit</button>\n        </div>\n    </div>\n</form>\n')),Object(t.b)("p",null,"You can then remix that once again with size-specific column classes."))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Form/form-grid.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=components-form-form-grid.afda1694a9a92002a462.js.map