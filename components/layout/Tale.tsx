import Image from "next/image";
import styled from "styled-components";
import { TaleProps } from "@/types/TaleProps";

function setCover(theme: string) {
	if (theme === "Drachen & Ritter") return "dragon";
	if (theme === "Wale & Meerestiere") return "whale";
	return "fairy";
}

export default function Tale({ theme, title, story, isPending = false }: TaleProps & { isPending?: boolean }) {
	return (
		<StyledArticle $isPending={isPending}>
			<StyledImage src={`/images/${setCover(theme)}.jpg`} width={691} height={219} alt={`Kindliches Aquarell mit dem Thema: ${theme}`} priority />
			<StyledCaption>{theme}</StyledCaption>
			<StyledHeadline>{title}</StyledHeadline>
			<StyledWrapper>
				{story.map((paragraph, index) => (
					<StyledParagraph key={index}>{paragraph}</StyledParagraph>
				))}
			</StyledWrapper>
		</StyledArticle>
	);
}

const StyledArticle = styled.article<{ $isPending: boolean }>`
	margin: var(--spacing-48) 0;
	transition: opacity 0.3s ease;
	border-radius: var(--spacing-16);
	background-color: var(--color-gray-0);
	opacity: ${(props) => (props.$isPending ? "0.5" : "1.0")};
`;
const StyledImage = styled(Image)`
	border-radius: var(--spacing-8);
	margin: var(--spacing-8) var(--spacing-8) var(--spacing-48);
`;
const StyledCaption = styled.p`
	width: 518px;
	text-align: center;
	margin-inline: auto;
	color: var(--color-gray-60);
	margin-bottom: var(--spacing-8);
	font: var(--font-sans-medium-12);
`;
const StyledHeadline = styled.h2`
	width: 518px;
	text-align: center;
	margin-inline: auto;
	font: var(--font-serif-bold-24);
	margin-bottom: var(--spacing-48);
`;
const StyledWrapper = styled.div`
	width: 518px;
	display: flex;
	margin-inline: auto;
	gap: var(--spacing-24);
	flex-direction: column;
	margin-bottom: var(--spacing-96);
`;
const StyledParagraph = styled.p`
	font: var(--font-serif-regular-16);
`;
