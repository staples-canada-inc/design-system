import { css } from "styled-components";

export const theme = css`
	.CodeMirror.cm-s-docz-light {
		color: #bdae93;
		background-color: #292929
		border-radius: 0;
	}
	.cm-s-docz-light .CodeMirror-selected {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.cm-s-docz-light .CodeMirror-gutter,
	.cm-s-docz-light .CodeMirror-gutters {
		border: none;
		background-color: #292929
		border-radius: 0;
	}
	.cm-s-docz-light .CodeMirror-linenumber,
	.cm-s-docz-light .CodeMirror-linenumbers {
		color: #7c6f64 !important;
		background-color: #111
	}
	.cm-s-docz-light .CodeMirror-lines {
		color: #ddcba4 !important;
		background-color: #292929
	}
	.cm-s-docz-light .CodeMirror-cursor {
		border-left: 2px solid #ddcba4 !important;
	}
	/* addon: edit/machingbrackets.js & addon: edit/matchtags.js */
	.cm-s-docz-light .CodeMirror-matchingbracket,
	.cm-s-docz-light .CodeMirror-matchingtag {
		border-bottom: 2px solid #282828;
		color: #282828 !important;
		background-color: #928374;
	}
	.cm-s-docz-light .CodeMirror-nonmatchingbracket {
		border-bottom: 2px solid #bf616a;
		color: #ddcba4 !important;
		background-color: transparent;
	}
	.cm-s-docz-light .CodeMirror-activeline-background {
		background: #3c3836;
	}

	/* addon: fold/foldgutter.js */
	.cm-s-docz-light .CodeMirror-foldmarker,
	.cm-s-docz-light .CodeMirror-foldgutter,
	.cm-s-docz-light .CodeMirror-foldgutter-open,
	.cm-s-docz-light .CodeMirror-foldgutter-folded {
		border: none;
		text-shadow: none;
		color: #ddcba4 !important;
		background-color: transparent;
	}
	/* addon: selection/active-line.js */
	.cm-s-docz-light .CodeMirror-activeline-background {
		background-color: #3c3836;
	}
	/* basic syntax */
	.cm-s-docz-light .cm-attribute {
		color: ##747679;
	}
	.cm-s-docz-light .cm-keyword {
		color: #fe8019;
	}
	.cm-s-docz-light .cm-def {
		color: #ddcba4;
	}
	.cm-s-docz-light .cm-atom {
		color: #fe8019;
	}
	.cm-s-docz-light .cm-number {
		color: #b48ead;
	}
	.cm-s-docz-light .cm-property {
		color: #ddcba4;
	}
	.cm-s-docz-light .cm-qualifier {
		color: #8ec07c;
	}
	.cm-s-docz-light .cm-variable,
	.cm-s-docz-light .cm-variable-2 {
		color: #ddcba4;
	}
	.cm-s-docz-light .cm-variable-3 {
		color: #ddcba4;
	}
	.cm-s-docz-light .cm-string,
	.cm-s-docz-light .cm-string-2 {
		color: #9bd3dd;
	}
	.cm-s-docz-light .cm-operator {
		color: #fe8019;
	}
	.cm-s-docz-light .cm-meta {
		color: #fe8019;
	}
	.cm-s-docz-light .cm-comment {
		color: #4c566a;
	}
	.cm-s-docz-light .cm-error {
		color: #bf616a;
	}
	/* markdown */
	.cm-s-docz-light .cm-header {
		color: #ddcba4;
	}
	.cm-s-docz-light .cm-quote {
		color: #4c566a;
	}
	.cm-s-docz-light .cm-link {
		color: #ddcba4;
		text-decoration: none;
	}
	.cm-s-docz-light .cm-url {
		color: #ddcba4;
		text-decoration: underline;
	}
	.cm-s-docz-light .cm-strong {
		font-weight: bold;
	}
	.cm-s-docz-light .cm-em {
		font-style: italic;
	}
	/* diff */
	.cm-s-docz-light .cm-negative {
		color: #bf616a;
	}
	.cm-s-docz-light .cm-positive {
		color: #a3be8c;
	}
	/* html */
	.cm-s-docz-light .cm-tag {
		color: #f84934;
	}
`;
