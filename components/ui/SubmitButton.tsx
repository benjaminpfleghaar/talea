import Image from "next/image";
import styled from "styled-components";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }: { label: string }) {
	const { pending } = useFormStatus();

	if (pending)
		return (
			<StyledButton type="submit" aria-label="Laden" disabled={true}>
				<StyledLoader></StyledLoader>
			</StyledButton>
		);

	return (
		<StyledButton type="submit">
			<Image src="/images/ai.svg" width={18} height={21} alt="" /> {label}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: var(--spacing-4);
	justify-content: center;
	height: var(--spacing-48);
	color: var(--color-gray-0);
	border-radius: var(--spacing-8);
	font: var(--font-sans-medium-14);
	transition: background-color 0.3s ease;
	background-color: var(--color-gray-100);

	&:disabled {
		cursor: default;
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
