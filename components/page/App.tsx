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
	display: flex;
	margin-inline: auto;
	gap: var(--spacing-48);
	width: min(1344px, 100% - 6rem);
`;
