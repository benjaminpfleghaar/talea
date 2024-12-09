"use server";

// export async function handleSubmit(prevState: any, formData: FormData) {

export async function handleSubmit() {
	// const rawFormData = {
	// 	Name: formData.get("Name"),
	// 	Geschlecht: formData.get("Geschlecht"),
	// 	Alter: formData.get("Alter"),
	// 	Symptome: formData.get("Symptome"),
	// 	Thema: formData.get("Thema"),
	// };

	// const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${rawFormData.Name}`);
	// const response = await data.json();

	// Add a fake delay to make waiting noticeable.
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});

	return {
		theme: "Astronauten & Weltall",
		title: "Die Geschichte von Lorem ipsum",
		story: ["Lorem ipsum dolor sit amet consetetur.", "Ende"],
	};
}
