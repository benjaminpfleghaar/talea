"use client";

import styled from "styled-components";

export default function Select({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<StyledWrapper>
			<StyledLabel htmlFor={label}>{label}</StyledLabel>
			<StyledSelect id={label} name={label}>
				{children}
			</StyledSelect>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	gap: var(--spacing-8);
	flex-direction: column;
`;
const StyledLabel = styled.label`
	font: var(--font-sans-medium-12);
`;
const StyledSelect = styled.select`
	display: flex;
	align-items: center;
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	font: var(--font-sans-regular-14);
	height: calc(var(--spacing-48) - 2px);
	border: 1px solid var(--color-gray-20);
	background: var(--color-gray-0) url("/images/down.svg") center right 16px / 16px 16px no-repeat;
`;
