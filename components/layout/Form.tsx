import styled from "styled-components";
import Input from "@/components/ui/Input";
import { useEffect, useState } from "react";
import Select from "@/components/ui/Select";
import MultiSelect from "@/components/ui/MultiSelect";
import SubmitButton from "@/components/ui/SubmitButton";
import { genders, symptoms, themes } from "@/data/data";

export default function Form({ onSubmit, isPending }: { onSubmit: (payload: FormData) => void; isPending: boolean }) {
	const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

	// Reset state after form submission
	useEffect(() => {
		if (!isPending) setSelectedSymptoms([]);
	}, [isPending]);

	function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedSymptoms([...selectedSymptoms, event.target.value]);
		event.target.selectedIndex = 0;
	}

	function handleClick(value: string) {
		setSelectedSymptoms(selectedSymptoms.filter((symptom) => symptom !== value));
	}

	return (
		<StyledAside>
			<StyledStickyWrapper>
				<StyledHeadline>Talea</StyledHeadline>
				<StyledParagraph>Hilf deinen Patienten durch eine personalisierte Geschichte dabei ihre ADHS Symptomatik besser zu verstehen und zu lernen damit umzugehen.</StyledParagraph>
				<StyledForm action={onSubmit}>
					<Input label="Name" placeholder="Vorname des Patienten" />
					<StyledRow>
						<Select label="Geschlecht">
							{genders.map((gender) => (
								<option key={gender} value={gender}>
									{gender}
								</option>
							))}
						</Select>
						<Input label="Alter" placeholder="0" />
					</StyledRow>
					<MultiSelect label="Symptome" selectedSymptoms={selectedSymptoms} onChange={handleChange} onClick={handleClick}>
						<option value="" disabled>
							Wähle zutreffende Symptome aus
						</option>
						{symptoms.map((symptom) => (
							<option key={symptom} value={symptom} disabled={selectedSymptoms.includes(symptom)}>
								{symptom}
							</option>
						))}
					</MultiSelect>
					{selectedSymptoms.length !== 0 && <input type="hidden" name="Symptome" value={selectedSymptoms.join(", ")} />}
					<Select label="Thema">
						{themes.map((theme) => (
							<option key={theme} value={theme}>
								{theme}
							</option>
						))}
					</Select>
					<SubmitButton label="Geschichte erstellen" />
				</StyledForm>
			</StyledStickyWrapper>
		</StyledAside>
	);
}

const StyledAside = styled.aside`
	padding: var(--spacing-48) 0;
`;
const StyledStickyWrapper = styled.div`
	display: flex;
	position: sticky;
	gap: var(--spacing-24);
	flex-direction: column;
	top: var(--spacing-48);
`;
const StyledHeadline = styled.h1`
	padding-left: var(--spacing-24);
	font: var(--font-sans-medium-16);
	background: url("/images/logo.svg") center left / 16px 16px no-repeat;
`;
const StyledParagraph = styled.p`
	color: var(--color-gray-60);
	font: var(--font-sans-regular-14);
`;
const StyledForm = styled.form`
	display: contents;
`;
const StyledRow = styled.div`
	display: grid;
	column-gap: var(--spacing-16);
	grid-template-columns: 214px 99px;
`;
