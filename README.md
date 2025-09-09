# Talea

A **Next.js** prototype developed during a five-day hackathon. Talea uses AI to generate personalized stories that help children with ADHD better understand themselves, their symptoms, and the condition as a whole.

![Mockup](./assets/mockup.jpg)

## Features

- **AI-Powered Stories:** Personalized stories are generated using ChatGPT
- **Customizable Settings:** Fine tune stories based on age, gender and symptoms
- **Story Topics:** Choose from a variety of themes and scenarios

## Technologies

This project is built with:

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Styled-Components](https://styled-components.com/)
- **Generator**: [GPT-4o mini](https://openai.com/)
- **Icons**: [Google](https://fonts.google.com/icons)

## Getting Started

Ensure you have **Node.js** installed and an **OpenAI** API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/benjaminpfleghaar/talea.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local.` file and provide credentials:
   ```plaintext
   OPENAI_API_KEY=<YOUR_KEY>
   ```

4. Run the application:
   ```bash
   npm run dev
   ```