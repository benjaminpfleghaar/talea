"use client";

import styled from "styled-components";
import Form from "@/components/layout/Form";
import Book from "@/components/layout/Book";

export default function App() {
	return (
		<StyledMain>
			<Form />
			<Book />
		</StyledMain>
	);
}

const StyledMain = styled.main`
	display: grid;
	width: 1084px;
	margin-inline: auto;
	column-gap: var(--spacing-48);
	grid-template-columns: 329px 707px;
`;
