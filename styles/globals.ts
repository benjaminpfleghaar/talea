"use client";

import { createGlobalStyle } from "styled-components";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";

const IBMPlexSans = IBM_Plex_Sans({
	weight: ["400", "500"],
	subsets: ["latin"],
});
const IBMPlexSerif = IBM_Plex_Serif({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
    :root {
		--font-sans: ${IBMPlexSans.style.fontFamily}, sans-serif;
        --font-serif: ${IBMPlexSerif.style.fontFamily}, serif;

        --font-sans-regular-14: 400 0.875rem/1rem var(--font-sans);
        --font-sans-regular-16: 400 1rem/1.5rem var(--font-sans);

        --font-sans-medium-12: 500 0.75rem/0.75rem var(--font-sans);
        --font-sans-medium-14: 500 0.875rem/0.875rem var(--font-sans);
        --font-sans-medium-16: 500 1rem/1rem var(--font-sans);

        --font-serif-bold-40: 700 2.5rem/3rem var(--font-serif);
        --font-serif-regular-20: 400 1.25rem/1.875rem var(--font-serif);
        --font-serif-regular-60: 400 3.75rem/3.75rem var(--font-serif);

        --color-gray-100: #161616;
		--color-gray-60: #6F6F6F;
		--color-gray-50: #8D8D8D;
		--color-gray-20: #E0E0E0;
		--color-gray-10: #F4F4F4;
		--color-gray-0: #FFFFFF;

		--spacing-4: 0.25rem;
		--spacing-8: 0.5rem;
		--spacing-12: 0.75rem;
		--spacing-16: 1rem;
		--spacing-20: 1.25rem;
		--spacing-24: 1.5rem;
		--spacing-32: 2rem;
		--spacing-40: 2.5rem;
		--spacing-48: 3rem;
		--spacing-64: 4rem;
		--spacing-96: 6rem;
		--spacing-120: 7.5rem;
    }
	body {
		color: var(--color-gray-100);
		background: var(--color-gray-10);

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	img {
		height: auto;
		display: block;
		max-width: 100%;
	}
	input,
	select,
	button {
		all: unset;
	}
	input,
	button,
	select {
		&:focus-visible {
			outline-offset: 2px;
			outline: 2px solid var(--color-gray-100);
		}
	}
`;

export default GlobalStyles;
