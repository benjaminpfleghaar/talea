"use client";

import { tale } from "@/data/data";
import { useActionState } from "react";
import styled from "styled-components";
import Form from "@/components/layout/Form";
import Tale from "@/components/layout/Tale";
import { handleSubmit } from "@/utils/actions";

export default function App() {
	const [taleState, formAction, isPending] = useActionState(handleSubmit, tale);

	return (
		<StyledMain>
			<Form onSubmit={formAction} isPending={isPending} />
			<Tale {...taleState} isPending={isPending} />
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
