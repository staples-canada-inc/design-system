import * as React from "react";
import { SFC, useState, useEffect } from "react";
import { useConfig } from "docz";
import styled from "styled-components";
import { get } from "../../../utils/theme";

import { Search } from "../Search";

const Wrapper = styled.div`
    display: flex;
    padding: .5rem 1rem;
    margin-bottom: 60px;
    background: ${get("colors.topBarBg")}
    opacity: 1;
`;

export const TopBar: SFC = ({children}) => {
	const [hidden, setHidden] = useState(true);
	const [setQuery] = useState("");
	return <Wrapper>{children}</Wrapper>;
};
