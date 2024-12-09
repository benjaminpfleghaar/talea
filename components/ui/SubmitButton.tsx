import styled from "styled-components";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }: { label: string }) {
	const { pending } = useFormStatus();

	return (
		<StyledButton type="submit" aria-label={pending ? "Laden" : ""} disabled={pending}>
			{pending ? <StyledLoader></StyledLoader> : label}
		</StyledButton>
	);
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
	transition: color 0.3s ease, background-color 0.3s ease;

	&:disabled {
		cursor: default;
		color: var(--color-gray-10);
		background-color: var(--color-gray-60);
	}
`;
const StyledLoader = styled.span`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	border: 2px solid var(--color-gray-50);
	animation: rotation 1s linear infinite;
	border-bottom-color: var(--color-gray-0);

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
