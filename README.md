# Movie Library Search App

A simple, responsive movie library search application powered by the [OMDb API](http://www.omdbapi.com/). This app allows users to search for movies, view details, and explore movies by different categories.

## Features

- **Search Movies**: Search for movies by title.
- **View Movie Details**: Click on a movie to view additional details, including genre, release date, and plot summary.
- **Responsive Design**: Optimized for both mobile and desktop viewing.
- **Loading Animations**: Engaging animations provide feedback while data is being fetched.
- **Smooth Animations**: Interactive animations enhance the user experience.

---

## Prerequisites

- **Node.js** and **npm** installed on your system.
- **OMDb API Key**: Sign up at [OMDb API](http://www.omdbapi.com/apikey.aspx) to get a free API key.

## How to Run the App

1. **Clone the repository**:

```
git clone https://github.com/nicholaskang/ReactFlix.git
cd ReactFlix
```

2. **Install dependencies**:

```
npm install
```

3. **Add Environment Variables**:

- Create a `.env` file in the root of the project.
- Add your OMDb API key:

```
VITE_OMDB_API_KEY=your_api_key_here
```

4. **Run the development server**:

```
npm run dev
```

5. **Open the app**:

- Visit http://localhost:5173 in your browser.

---

## Folder Structure

- `src/:` Contains the main source code.
  - `components/:` Reusable components like MovieCard and SearchMovies.
  - `pages/:` Different pages like MovieDetails and Home.
  - `assets/:` Static assets like images or SVGs.
- `public/:` Public files and assets.

## Technologies Used

React and TypeScript for building the app.
Chakra UI for styling and layout.
Axios for API requests.
Vite as the build tool for faster development.

## API Reference

This app uses the OMDb API to fetch movie data.

- Search Movies: https://www.omdbapi.com/?s=movie_title&apikey=your_api_key
- Get Movie Details: https://www.omdbapi.com/?i=movie_id&apikey=your_api_key

## Notes

Environment Variables: Ensure your OMDb API key is kept secure and added to .env (not committed to version control).
Error Handling: The app includes basic error handling to display messages if a movie can’t be found.

## License

This project is licensed under the MIT License.
