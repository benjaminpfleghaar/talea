"use client";

import styled from "styled-components";

export default function Pill({ label, onClick }: { label: string; onClick: (label: string) => void }) {
	return (
		<StyledButton type="button" onClick={() => onClick(label)}>
			{label}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	cursor: pointer;
	align-self: flex-start;
	height: var(--spacing-32);
	color: var(--color-gray-70);
	border-radius: var(--spacing-8);
	font: var(--font-sans-medium-12);
	padding: 0 var(--spacing-32) 0 var(--spacing-12);
	background: var(--color-gray-20) url("/images/close.svg") center right 8px / 16px 16px no-repeat;
`;
