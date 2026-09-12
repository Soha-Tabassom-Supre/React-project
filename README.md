Dev Stack

Dev Stack is a responsive web application that helps developers explore popular technologies and build their own development stack.

Technology information is loaded from a local JSON file, and users can add technologies to their personal stack, remove individual technologies, or clear the entire stack.

 Features

* Responsive design for desktop, tablet, and mobile
* Sticky responsive navbar
* Hero section with call-to-action buttons
* Technology data loaded from a local JSON file
* Technology cards with:

  * Technology icon
  * Name
  * Category
  * Description
  * Difficulty
  * Rating
  * Badge
* Add technologies to your stack
* Prevent duplicate technologies
* Remove individual technologies
* Remove all technologies
* Toast notifications using React-Toastify
* Loading state while technology data is being fetched
* Error handling for failed data loading
* Responsive technology grid
* Sticky "Your Stack" sidebar on desktop
* Footer with navigation and social links
* Shared brand gradient throughout the application

Technologies Used

* React
* TypeScript
* Tailwind CSS
* React-Toastify
* Vite
* JSON

 Getting Started

 Installation

Clone the repository and install the dependencies:


npm install


 Run the Development Server


npm run dev


The application will be available at the local development URL provided by Vite.

 Build for Production

bash
npm run build


Project Structure


src/
├── assets/
│   ├── banner-stack.png
│   ├── hamburger.png
│   └── logo-text.png
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechnologySection.tsx
│   ├── TechnologyCard.tsx
│   └── Footer.tsx
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── index.css
└── main.tsx
│
public/
└── technologies.json


 React Concepts

1. What is JSX?

JSX is a syntax extension for JavaScript that allows us to write HTML-like syntax inside JavaScript or TypeScript.

It is commonly used in React to describe the UI.

For example:


<h1>Hello React</h1>

JSX is transformed into JavaScript that React uses to create and update the user interface.

 2. What is the difference between Props and State?

Props are values passed from a parent component to a child component. They are read-only from the child component's perspective.

State is data managed by a component that can change over time. When state changes, React re-renders the component so the UI can reflect the updated data.

In this project, TechnologyCard receives technology information through props, while the selected technology stack is managed as state inside TechnologySection.

 3. What is useState?

useState is a React Hook used to create and manage state inside functional components.

In this project, useState is used to manage:

* Technology data
* Selected technologies
* Loading state
* Error state

When the state changes, React re-renders the component and updates the UI.

4. What is useEffect?

useEffect is a React Hook used to perform side effects in a component.

Common side effects include:

* Fetching data
* Subscribing to external services
* Setting up event listeners
* Working with external systems

In this project, useEffect is used to fetch technology data from technologies.json  when the Technology section is loaded.

The empty dependency array means the effect does not depend on changing state or props.

5. What is the key prop?

The key prop gives React a stable identity for each item when rendering a list.

In this project, each technology is rendered with its unique id as the key.

A stable and unique key helps React identify which list items have been added, removed, or changed.

Keys should be unique among their siblings and should preferably come from stable data rather than array indexes.

6. What is Conditional Rendering?

Conditional rendering means displaying different UI based on a condition.

This project uses conditional rendering for:

* Loading state
* Error state
* Empty stack state
* Selected technologies
* Add to Stack button
* Added to Stack button

For example, when the stack is empty, an empty-state message is shown. When technologies are added, the selected technologies are displayed instead.

7. How does Parent-to-Child Communication work?

A parent component communicates with a child component by passing data through props.

In this project, TechnologySection passes the following information to TechnologyCard:

* technology
* isAdded
* onAdd

The child component receives these values through its props and uses them to display the technology and control the Add to Stack button.

8. How does Child-to-Parent Communication work?

A child component can communicate with its parent by receiving a callback function through props.

In this project, TechnologySection passes the onAdd callback to TechnologyCard.

When the user clicks Add to Stack, the child component calls the callback with the selected technology.

The parent component then updates the stack state.

This keeps the shared stack data inside the parent while allowing the child to trigger changes through the callback.

 Data Source

Technology information is stored in:


public/technologies.json


The application fetches this JSON data when the Technology section loads instead of hardcoding the technology objects directly inside the component.

Notifications

React-Toastify is used to provide feedback for important user actions, including:

* Technology added
* Duplicate technology attempt
* Technology removed
* All technologies removed
* Technology loading error

Responsive Design

The application is designed to work across different screen sizes:

   Desktop: Three-column technology grid with a stack sidebar
   Tablet:Two-column technology grid
   Mobile:Single-column layout with a mobile-friendly navigation bar

Brand Gradient

The orange → pink → violet gradient is defined once as a shared brand-gradient utility and reused throughout the application.

This keeps the visual style consistent and avoids repeating the gradient definition in multiple components.

Author
Soha Tabassom Supre

CSE Student | React & Full-Stack Developer

