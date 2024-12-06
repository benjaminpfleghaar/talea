"use client";

import styled from "styled-components";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const genders = ["Männlich", "Weiblich", "Divers"];
const symptoms = ["Bewegungsdrang", "Flüchtigkeitsfehler", "Schnelle Frustration", "Vergesslichkeit", "Wenig Geduld"];
const characters = ["Der kleine Fuchs", "Der mutige Bär", "Die flinke Eule"];

export default function Form() {
	return (
		<StyledAside>
			<StyledHeadline>Talea</StyledHeadline>
			<StyledParagraph>Hilf deinen Patienten durch eine personalisierte Geschichte dabei ihre ADHS Symptomatik besser zu verstehen und zu lernen damit umzugehen.</StyledParagraph>
			<StyledForm>
				<StyledDiv>
					<Input label="Name" placeholder="Bitte gib den Namen des Patienten an" />
					<Input label="Alter" placeholder="0" />
				</StyledDiv>
				<Select label="Geschlecht">
					<option disabled>Bitte geben Sie das Geschlecht des Patienten an</option>
					{genders.map((gender) => (
						<option key={gender} value={gender}>
							{gender}
						</option>
					))}
				</Select>
				<Select label="Symptome">
					<option disabled>Bitte wählen Sie ein Symptom aus</option>
					{symptoms.map((symptom) => (
						<option key={symptom} value={symptom}>
							{symptom}
						</option>
					))}
				</Select>
				<Select label="Hauptfigur">
					<option disabled>Bitte wählen Sie eine Hauptfigur aus</option>
					{characters.map((character) => (
						<option key={character} value={character}>
							{character}
						</option>
					))}
				</Select>
				<Button label="Geschichte erstellen" />
			</StyledForm>
		</StyledAside>
	);
}

const StyledAside = styled.aside`
	width: 416px;
	display: flex;
	gap: var(--spacing-24);
	flex-direction: column;
	padding-top: var(--spacing-48);
`;
const StyledHeadline = styled.h1`
	font: var(--font-sans-medium-16);
`;
const StyledParagraph = styled.p`
	color: var(--color-gray-60);
	font: var(--font-sans-regular-16);
`;
const StyledForm = styled.form`
	display: contents;
`;
const StyledDiv = styled.div`
	display: grid;
	column-gap: var(--spacing-16);
	grid-template-columns: calc(80% - var(--spacing-8)) calc(20% - var(--spacing-8));
`;
