import { createGlobalStyle } from "styled-components";
import { get } from "../utils/theme";

import ttNormsMedium from "@fonts/tt_norms_medium.woff2";
import ttNormsBold from "@fonts/tt_norms_bold.woff2";
import ttNormsRegular from "@fonts/tt_norms_regular.woff2";


export const Global = createGlobalStyle`
@import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css');
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

@font-face {
    font-family: 'tt_norms_bold';
    font-weight: 700;
    font-style: normal;
    src: url(${ttNormsBold}) format('woff2');
  }

  @font-face {
    font-family: 'tt_norms_medium';
    font-weight: 400;
    font-style: normal;
    src: url(${ttNormsMedium}) format('woff2');
  }

  @font-face {
    font-family: 'tt_norms_regular';
    font-weight: 300;
    font-style: normal;
    src: url(${ttNormsRegular}) format('woff2');
  }
  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
    ${get("styles.body")};
  }

  .with-overlay {
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
  }
`;
