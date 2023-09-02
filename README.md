# Simple Chat Bot using React

This is a simple chat bot built using React and the `react-simple-chatbot` library. The chat bot engages with users, greets them, and asks for their name before offering options for selecting their issue related to React or Angular. Depending on the user's choice, the chat bot responds accordingly.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- React development environment set up

## Installation

1. Clone or download this repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Install the required dependencies by running:

   ```bash
   npm install react react-dom react-simple-chatbot
   ```

   This will install React, ReactDOM, and the `react-simple-chatbot` library.

## Usage

To use this simple chat bot, follow these steps:

1. Start the React development server:

   ```bash
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` (or the appropriate address if your development server runs on a different port).

3. You will see the chat bot in the bottom-right corner of the page. It will greet you and ask for your name.

4. Enter your name in the chat input and press Enter.

5. The chat bot will respond with a greeting and offer you a choice between React and Angular.

6. Select one of the options, and the chat bot will respond with a message based on your choice.

7. You can end the conversation at any time.

## Customization

You can customize the chat bot by modifying the `steps` array in the `App.js` file. Each step in the array represents a message or user interaction.

- `id`: A unique identifier for the step.
- `message`: The message the chat bot will display to the user.
- `trigger`: The ID of the next step to trigger.
- `user`: Set to `true` if the user needs to provide input.
- `options`: An array of options to present to the user for selection.
- `end`: Set to `true` to end the conversation after this step.

You can add, remove, or modify steps to create a more complex conversation flow.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to use, modify, and extend this chat bot for your own projects or applications. Enjoy chatting with your users!