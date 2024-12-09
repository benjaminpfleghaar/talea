"use client";

import Image from "next/image";
import styled from "styled-components";

interface BookProps {
	theme: string;
	title: string;
	story: string[];
}

export default function Book({ theme, title, story }: BookProps) {
	return (
		<StyledArticle>
			<StyledImage src="/images/der-kleine-drache.jpg" width={707} height={235} alt="Der kleine Drache" priority />
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

const StyledArticle = styled.article`
	margin: var(--spacing-48) 0;
	border-radius: var(--spacing-16);
	background-color: var(--color-gray-0);
`;
const StyledImage = styled(Image)`
	border-radius: var(--spacing-16);
	margin-bottom: var(--spacing-48);
	border: var(--spacing-8) solid var(--color-gray-0);
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
	color: var(--color-gray-100);
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
	color: var(--color-gray-100);
	font: var(--font-serif-regular-16);
`;
