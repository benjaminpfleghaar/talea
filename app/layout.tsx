import { Metadata } from "next";
import GlobalStyles from "@/styles/globals";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
	title: "Talea",
	description: "Create personalized stories to explain ADHD symptoms to children",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
