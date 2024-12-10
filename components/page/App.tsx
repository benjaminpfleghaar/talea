"use client";

import styled from "styled-components";
import { useActionState } from "react";
import Form from "@/components/layout/Form";
import Tale from "@/components/layout/Tale";
import { handleSubmit } from "@/utils/actions";
import { tale as initialTale } from "@/data/data";

export default function App() {
	const [taleState, formAction, isPending] = useActionState(handleSubmit, null);

	return (
		<StyledMain>
			<Form onSubmit={formAction} isPending={isPending} />
			<Tale {...(taleState || initialTale)} isPending={isPending} />
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
