"use client";

import Image from "next/image";
import styled from "styled-components";

export default function Book() {
	return (
		<StyledArticle>
			<StyledImage src="/images/der-kleine-drache.jpg" width={707} height={235} alt="Der kleine Drache" priority />
			<StyledCaption>Drachen & Ritter</StyledCaption>
			<StyledHeadline>
				Die Geschichte von Lila,
				<br />
				dem kleinen Drachen mit dem Wirbelwind im Bauch
			</StyledHeadline>
			<StyledWrapper>
				<StyledParagraph>
					Es war einmal ein kleiner Drache namens Lila. Sie lebte in einer bunten Drachenhöhle hoch oben in den Wolken. Lila war nicht wie die anderen Drachen. Während ihre Geschwister stundenlang ruhig auf ihren Schatzhaufen lagen oder an komplizierten Flugfiguren arbeiteten, hatte Lila immer etwas anderes vor. In ihrem Bauch wirbelte ein kleiner unsichtbarer Sturm, den sie „den
					Wirbelwind“ nannte.
				</StyledParagraph>
				<StyledParagraph>
					Wenn sie versuchte, still zu sitzen, um einen Drachenritterhelm zu bemalen, begann der Wirbelwind in ihrem Bauch zu tanzen. „Flieg! Spring! Mach etwas anderes!“ flüsterte der Wirbelwind ihr zu. Und bevor Lila es merkte, flog sie schon durch die Höhle, rutschte über goldene Münzen oder sang laute Lieder, die ihr gerade in den Sinn kamen. Ihre Geschwister verdrehten oft die Augen
					und sagten: „Lila, kannst du nicht einmal still sein?“ Aber das konnte sie einfach nicht.
				</StyledParagraph>
				<StyledParagraph>
					Doch das war nicht alles. Manchmal gab es wichtige Drachenaufgaben, wie Feuerbälle exakt zu zünden oder lange Schatzkarten zu lesen. Lila wollte das wirklich tun, doch sobald sie anfing, entdeckte sie auf der Karte einen lustigen Baum oder einen Schatztruhenschlüssel, der sie ablenkte. Bevor sie es merkte, war sie auf einer völlig anderen Mission. „Warum mache ich nie das, was
					ich eigentlich soll?“ fragte sich Lila oft traurig.
				</StyledParagraph>
				<StyledParagraph>
					Eines Tages bekam Lila eine große Aufgabe: Die Drachenritter brauchten ihre Hilfe, um ein verlorenes Schwert zu finden. Das Schwert war magisch und nur ein Drache mit viel Energie und Fantasie konnte es entdecken. Lila war aufgeregt! Sie flog los, doch unterwegs passierten wieder all diese Dinge: Sie blieb stehen, um mit einem bunten Vogel zu reden, und vergaß fast, warum sie
					überhaupt unterwegs war. Sie entdeckte einen Wasserfall und spritzte mit den Füßen durchs Wasser, bis sie plötzlich dachte: „Oh nein, ich soll doch das Schwert finden!“
				</StyledParagraph>
				<StyledParagraph>
					Lila wurde frustriert. „Ich kann das nicht!“ sagte sie laut. Aber dann hörte sie eine Stimme: „Doch, das kannst du!“ Es war ein weiser, alter Drache, der am Rand des Waldes saß. „Weißt du, Lila, dein Wirbelwind ist manchmal sehr wild. Aber genau das macht dich auch besonders. Du siehst Dinge, die andere übersehen, und kommst auf Ideen, die niemand sonst hätte. Du musst nur
					lernen, deinen Wirbelwind zu lenken.“
				</StyledParagraph>
				<StyledParagraph>„Wie lenkt man einen Wirbelwind?“ fragte Lila neugierig. Der alte Drache lächelte. „Erstmal atme tief ein und zähle bis drei. Dann denk dir eine kleine Aufgabe – etwas, das du sofort tun kannst. Zum Beispiel: Finde nur den nächsten Baum mit Moos und dann den nächsten. Stück für Stück.“</StyledParagraph>
				<StyledParagraph>Lila probierte es aus. Sie nahm einen tiefen Atemzug, zählte bis drei und suchte den ersten Baum. Es funktionierte! Und mit jedem kleinen Schritt wurde der Wirbelwind ein bisschen ruhiger. Schließlich fand sie das Schwert – und die Drachenritter jubelten.</StyledParagraph>
				<StyledParagraph>Von diesem Tag an wusste Lila, dass ihr Wirbelwind kein Feind war, sondern ein Freund, der sie besonders machte. Sie musste nur manchmal mit ihm reden, ihn lenken und Pausen machen. Und obwohl es nicht immer perfekt klappte, wusste sie: „Ich bin ein kleiner Drache mit einem großen Wirbelwind – und das ist gut so.“</StyledParagraph>
				<StyledParagraph>Ende</StyledParagraph>
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
