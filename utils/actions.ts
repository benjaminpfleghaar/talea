"use server";

import OpenAI from "openai";
import { TaleProps } from "@/types/TaleProps";

export async function handleSubmit(prevState: TaleProps | null, formData: FormData) {
	const formDataObject = {
		Name: formData.get("Name") as string,
		Geschlecht: formData.get("Geschlecht") as string,
		Alter: formData.get("Alter") as string,
		Symptome: formData.get("Symptome") as string,
		Thema: formData.get("Thema") as string,
	};

	if (isNaN(Number(formDataObject.Alter))) return prevState;

	const openai = new OpenAI();
	const completion = await openai.chat.completions.create({
		model: "gpt-4o-mini",
		messages: [
			{ role: "system", content: "Du bist ein erfahrener Kinder- und Jugendlichen Psychotherapeut." },
			{
				role: "user",
				content: `Ich möchte, dass du mir dabei hilfst eine fiktive und personalisierte Geschichte zu erfinden, die meinen Patienten dabei hilft ihre Symptome besser zu verstehen. Folgende Daten sollen in die Geschichte einfließen und sie formen: Name: ${formDataObject.Name}, Alter: ${formDataObject.Alter}, Geschlecht: ${formDataObject.Geschlecht}, Symptome: ${formDataObject.Symptome}, Ziel der Geschichte: Exploration durch Identifikation mit der Hauptfigur, Thema der Geschichte: ${formDataObject.Thema}, Länge der Geschichte: 2 Minuten Lesedauer. Gib mir als Antwort nur die Geschichte als JSON Objekt ohne Umbrüche und Markdown in folgendem Format zurück: theme: “Thema der Geschichte”, title: “Titel der Geschichte”, story: [“Erster Absatz”, “Zweiter Absatz”, ...]`,
			},
		],
	});

	if (completion.choices[0].message.content !== null) return JSON.parse(completion.choices[0].message.content);

	return prevState;
}
