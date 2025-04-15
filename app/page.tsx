export default function Home() {
  return (
    <div className="p-0 m-0 flex flex-col items-center justify-center min-h-[60vh]">
      {/* Ілюстрація мемного персонажа */}
      <div className="mb-6 animate-bounce">
        <svg
          className="w-32 h-32 drop-shadow-lg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trollface (спрощена SVG-ілюстрація) */}
          <circle
            cx="100"
            cy="100"
            fill="#fff"
            r="80"
            stroke="#000"
            strokeWidth="5"
          />
          <path
            d="M60 80 Q70 60 100 80 Q130 60 140 80"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <circle cx="80" cy="110" fill="#000" r="10" />
          <circle cx="120" cy="110" fill="#000" r="10" />
          <path
            d="M70 140 Q100 160 130 140"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </svg>
      </div>

      {/* Заголовок із градієнтом */}
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Welcome to Memasik Catalog!
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300">
        Explore popular memes in a table or list view using the navigation
        above.
      </p>
    </div>
  );
}
