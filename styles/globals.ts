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

        --font-sans-regular-14: 400 0.875rem/1.3125rem var(--font-sans);
        --font-sans-medium-12: 500 0.75rem/0.75rem var(--font-sans);
        --font-sans-medium-14: 500 0.875rem/0.875rem var(--font-sans);
        --font-sans-medium-16: 500 1rem/1rem var(--font-sans);

        --font-serif-regular-16: 400 1rem/1.5rem var(--font-serif);
        --font-serif-bold-24: 700 1.5rem/2rem var(--font-serif);

        --color-gray-100: #161616;
		--color-gray-60: #6F6F6F;
		--color-gray-50: #8D8D8D;
		--color-gray-20: #E0E0E0;
		--color-gray-10: #F4F4F4;
		--color-gray-0: #FFFFFF;

		--spacing-8: 0.5rem;
		--spacing-16: 1rem;
		--spacing-24: 1.5rem;
		--spacing-48: 3rem;
		--spacing-96: 6rem;
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
