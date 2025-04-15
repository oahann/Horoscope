 🌟 Horoscope Website
A Next.js application that displays personalized horoscopes based on zodiac signs with daily, weekly, and monthly predictions. The application includes health, relationship, and career scores that are generated based on the chosen zodiac sign and date.

 📋 Features
- Zodiac Sign Selection: Choose from all 12 zodiac signs with interactive icons
- Multiple Time Periods: View horoscopes for today, tomorrow, weekly, or monthly
- Theme Switching: Toggle between light and dark themes
- Personalized Scores: View generated health, relationship, and career scores
- Cat Facts: Receive random cat facts when your average zodiac score is high enough
- Social Sharing: Share your horoscope via various social media platforms

 🛠️ Technologies Used
- Next.js: React framework with server-side rendering
- React: JavaScript library for building user interfaces
- CSS Modules: For component-scoped styling
- React Select: For customized dropdown menus
- React Icons: For zodiac and UI icons
- Axios: For API requests
- localStorage: For persisting scores and user preferences


 🚀 Getting Started
Prerequisites

- Node.js 14.x or higher
- npm or yarn

 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd horoscope-website
   ```

2. Install dependencies:
   ```bash
   npm install
    or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
    or
   yarn dev
   ```

4. Open http://localhost:3000 in your browser to see the application.

 🔄 API Integration

The application uses the following APIs:

- Horoscope API: `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/`
  - Endpoints for daily, weekly, and monthly horoscopes
  - Parameters: sign, day (for daily horoscopes)

- Cat Facts API: `https://catfact.ninja/fact`
  - Returns random facts about cats
  - Displayed when the average zodiac score is above 5

 💾 Local Storage Usage

The application stores the following information in localStorage:

- Theme preference: User's preferred theme (light or dark)
- Generated scores: Scores for health, relationships, and career are stored with a key format of `${sign}-${date}`

 🛠️ Implementation Details

 Score Generation

Scores are generated using a pseudo-random algorithm based on the selected zodiac sign and date. This ensures that:
- Scores are consistent for the same sign and date
- Values range from 0 to 10
- Each category (health, relationships, career) has its own unique score

 Theme Switching

The theme system works by:
1. Toggling CSS classes on the root HTML element
2. Storing the preference in localStorage
3. Using CSS variables to apply theme-specific colors throughout the application
