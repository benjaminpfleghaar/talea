"use client";

import styled from "styled-components";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const genders = ["Männlich", "Weiblich", "Divers"];
const symptoms = ["Schwierigkeiten still zu sitzen", "Gefühl innerer Unruhe", "Bewegungsdrang", "Viel reden", "Flüchtigkeitsfehler", "Vergesslichkeit", "Erhöhte Ablenkbarkeit", "Aufschieben ungeliebter Tätigkeiten", "Wenig Geduld", "Schnelle Frustration", "Starke und plötzliche Emotionen", "Unterbrechen/Stören anderer"];
const characters = ["Drachen & Ritter", "Astronauten & Weltall", "Tiere & Wald"];

export default function Form() {
	return (
		<StyledAside>
			<StyledWrapper>
				<StyledHeadline>Talea</StyledHeadline>
				<StyledParagraph>Hilf deinen Patienten durch eine personalisierte Geschichte dabei ihre ADHS Symptomatik besser zu verstehen und zu lernen damit umzugehen.</StyledParagraph>
				<StyledForm>
					<Input label="Name" placeholder="Vorname des Patienten" />
					<StyledDiv>
						<Select label="Geschlecht">
							{genders.map((gender) => (
								<option key={gender} value={gender}>
									{gender}
								</option>
							))}
						</Select>
						<Input label="Alter" placeholder="0" />
					</StyledDiv>
					<Select label="Symptome">
						{symptoms.map((symptom) => (
							<option key={symptom} value={symptom}>
								{symptom}
							</option>
						))}
					</Select>
					<Select label="Thema">
						{characters.map((character) => (
							<option key={character} value={character}>
								{character}
							</option>
						))}
					</Select>
					<Button label="Geschichte erstellen" />
				</StyledForm>
			</StyledWrapper>
		</StyledAside>
	);
}

const StyledAside = styled.aside`
	padding: var(--spacing-48) 0;
`;
const StyledWrapper = styled.div`
	display: flex;
	position: sticky;
	gap: var(--spacing-24);
	flex-direction: column;
	top: var(--spacing-48);
`;
const StyledHeadline = styled.h1`
	font: var(--font-sans-medium-16);
`;
const StyledParagraph = styled.p`
	color: var(--color-gray-60);
	font: var(--font-sans-regular-14);
`;
const StyledForm = styled.form`
	display: contents;
`;
const StyledDiv = styled.div`
	display: grid;
	column-gap: var(--spacing-16);
	grid-template-columns: 214px 99px;
`;
