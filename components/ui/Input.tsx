"use client";

import styled from "styled-components";

export default function Input({ label, placeholder }: { label: string; placeholder: string }) {
	return (
		<StyledDiv>
			<StyledLabel htmlFor={label}>{label}</StyledLabel>
			<StyledInput type="text" id={label} name={label} placeholder={placeholder} required />
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
	flex-direction: column;
`;
const StyledLabel = styled.label`
	font: var(--font-sans-medium-12);
`;
const StyledInput = styled.input`
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	font: var(--font-sans-regular-14);
	height: calc(var(--spacing-48) - 2px);
	background-color: var(--color-gray-0);
	border: 1px solid var(--color-gray-20);

	&::placeholder {
		color: var(--color-gray-60);
	}
`;
