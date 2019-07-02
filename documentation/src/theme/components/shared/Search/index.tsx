import * as React from "react";
import { SFC } from "react";
import styled from "styled-components";
import SearchIcon from "react-feather/dist/icons/search";

import { get } from "../../../utils/theme";

const searchText = get("colors.searchText");

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 24px;
	opacity: 1;
`;

const Icon = styled(SearchIcon)`
	stroke: #fff;
	min-width: 20px;
	opacity: 0.5;
`;

const Input = styled.input`
	align-self: right !important;
	outline: none;
	width: 100%;
	margin: 0px !important;
	background: transparent !important;
	border: none !important;
	font-size: 16px;
	color: ${searchText} !important;
`;

interface SearchProps {
	onSearch: (value: string) => void;
}

export const Search: SFC<SearchProps> = ({ onSearch }) => (
	<Wrapper>
		<Icon />
		<Input
			type="text"
			placeholder="Search here..."
			onChange={(ev: any) => {
				onSearch && onSearch(ev.target.value);
			}}
		/>
	</Wrapper>
);
