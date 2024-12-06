import styled from "styled-components";

export default function SubmitButton({ label }: { label: string }) {
	return <StyledButton type="submit">{label}</StyledButton>;
}

const StyledButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	height: var(--spacing-48);
	color: var(--color-gray-0);
	border-radius: var(--spacing-8);
	font: var(--font-sans-medium-14);
	background-color: var(--color-gray-100);
`;
