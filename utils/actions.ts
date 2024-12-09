"use server";

import OpenAI from "openai";
import { TaleProps } from "@/types/TaleProps";

export async function handleSubmit(prevState: TaleProps, formData: FormData) {
	const rawFormData = {
		Name: formData.get("Name") as string,
		Geschlecht: formData.get("Geschlecht") as string,
		Alter: formData.get("Alter") as string,
		Symptome: formData.get("Symptome") as string,
		Thema: formData.get("Thema") as string,
	};

	// const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${rawFormData.Name}`);
	// const response = await data.json();

	// Add a fake delay to make waiting noticeable.
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});

	// const openai = new OpenAI();
	// const completion = await openai.chat.completions.create({
	// 	model: "gpt-4o-mini",
	// 	messages: [
	// 		{ role: "system", content: "Du bist ein erfahrener Kinder- und Jugendlichen Psychotherapeut." },
	// 		{
	// 			role: "user",
	// 			content: `Ich möchte, dass du mir dabei hilfst eine fiktive und personalisierte Geschichte zu erfinden, die meinen Patienten dabei hilft ihre Symptome besser zu verstehen. Folgende Daten sollen in die Geschichte einfließen und sie formen: Name: ${rawFormData.Name}, Alter: ${rawFormData.Alter}, Geschlecht: ${rawFormData.Geschlecht}, Symptome: ${rawFormData.Symptome}, Ziel der Geschichte: Exploration durch Identifikation mit der Hauptfigur, Thema der Geschichte: ${rawFormData.Thema}, Länge der Geschichte: 2 Minuten Lesedauer. Gib mir als Antwort nur die Geschichte als JSON Objekt ohne Umbrüche und Markdown in folgendem Format zurück: theme: “Thema der Geschichte”, title: “Titel der Geschichte”, story: [“Erster Absatz”, “Zweiter Absatz”, ...]`,
	// 		},
	// 	],
	// });

	// if (completion.choices[0].message.content !== null) return JSON.parse(completion.choices[0].message.content);

	return prevState;
}
