"use client";

import styled from "styled-components";
import Pill from "@/components/ui/Pill";

interface MultiSelectProps {
	label: string;
	selectedSymptoms: string[];
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onClick: (symptom: string) => void;
	children: React.ReactNode;
}

export default function MultiSelect({ label, selectedSymptoms, onChange, onClick, children }: MultiSelectProps) {
	return (
		<StyledWrapper>
			<StyledLabel htmlFor={label}>{label}</StyledLabel>
			<StyledSelect id={label} name={label} onChange={onChange} defaultValue="" required={selectedSymptoms.length === 0}>
				{children}
			</StyledSelect>
			{selectedSymptoms.length !== 0 && (
				<StyledRow>
					{selectedSymptoms.map((symptom) => (
						<Pill key={symptom} label={symptom} onClick={onClick} />
					))}
				</StyledRow>
			)}
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
	white-space: nowrap;
	text-overflow: ellipsis;
	color: var(--color-gray-60);
	border-radius: var(--spacing-8);
	font: var(--font-sans-regular-14);
	height: calc(var(--spacing-48) - 2px);
	border: 1px solid var(--color-gray-20);
	padding: 0 var(--spacing-64) 0 var(--spacing-16);
	background: var(--color-gray-0) url("/images/down.svg") center right 16px / 16px 16px no-repeat;
`;
const StyledRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--spacing-8);
	padding-top: var(--spacing-8);
`;
