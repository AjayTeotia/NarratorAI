
# NarratorAI

Welcome to NarratorAI! This web application allows users to generate personalized children's stories by filling in a few details. Built with modern technologies, this project aims to provide an engaging storytelling experience for kids and parents alike.

## Technologies Used
- Next.js: A powerful React framework for building server-rendered applications.
- Clerk: For user authentication, ensuring a secure and seamless sign-in experience.
- Tailwind CSS: A utility-first CSS framework for designing responsive and modern UI.
- ShadcnUI: A component library for crafting beautiful user interfaces.
- Database: Utilizing Neno Drizzle ORM for database interactions.
- AI: Powered by Gemini AI for generating creative story content.

## Features
- User authentication through Clerk.
- Simple and intuitive form for entering story details.
- AI-generated stories tailored to user input.
- Responsive design using Tailwind CSS for optimal viewing on all devices.
- Modern UI components from ShadcnUI.

### Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm

### Installation
    1. Clone the repository:
    ```bash
        git clone https://github.com/yourusername/narratorai.git
    
    2. Navigate to the project directory:
    ```bash
        cd narratorai

    3. Install the dependencies:
    ```bash
        npm install

### Configuration

    1. Set up your Clerk account and obtain the necessary API keys.

    2. Create a .env.local file in the root directory and add your Clerk API     keys:

        ``` bash
            NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
            CLERK_SECRET_KEY=

            NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
            NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

            NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
            NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

            NEXT_PUBLIC_CREATE_STORY_PROMPT = create kids' story in full description for {ageGroup} Years kids, {storyType}, story of {subjectInput}, give me {chapters} chapter for the {duration} , and  With detailed description and creative title make a long description for each chapter make a title for the story, all in JSON field format

            NEXT_PUBLIC_GEMINI_API_KEY = 
            NEXT_PUBLIC_DB_STRING = 
    4. Open your browser and navigate to http://localhost:3000.
