# Notes App

A simple note-taking web application built with React and Firebase Firestore, allowing you to create, edit, and delete markdown notes.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and edit markdown notes.
- Real-time synchronization with Firebase Firestore.
- Responsive design for both desktop and mobile.
- User-friendly interface.


## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
 ```bash
 git clone https://github.com/hadil-jilani/notes-app
 ```
2. Navigate to the project directory:
  ```bash
  cd notes-app
  ```
4. Install the dependencies
  ```bash
  npm install
  ```
4. Create a Firebase project and set up Firestore. Update the Firebase configuration in src/firebase.js with your own credentials.
5. Start the development server:
  ```bash
  npm start dev
  ```
6. Click on the url provided in the console to view the app.

## Usage

* Create a New Note: Click the "+" button in the sidebar to create a new note.

* Edit a Note: Select a note from the sidebar to edit its contents in the editor.

* Delete a Note: Click the trash icon next to a note in the sidebar to delete it.

* Markdown Editor: The editor supports markdown syntax, and you can switch between writing and preview modes using the tabs.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:
1. Fork the repository
2. Create a new branch for your feature or bug fix
    ```bash
    git checkout -b feature/new-feature
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push your changes to your fork
    ```bash
    git push origin feature/new-feature
    ```
5. Open a pull request to the main branch of this repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
