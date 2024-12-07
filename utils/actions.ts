"use server";

export async function handleSubmit() {
	const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const response = await data.json();

	// const rawFormData = {
	// 	Name: formData.get("Name"),
	// 	Geschlecht: formData.get("Geschlecht"),
	// 	Alter: formData.get("Alter"),
	// 	Symptome: selectedSymptoms,
	// 	Thema: formData.get("Thema"),
	// };

	// Add a fake delay to make waiting noticeable.
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});

	return response;
}
