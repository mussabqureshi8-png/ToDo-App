import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ darkMode, setDarkMode }) => {

  const today = new Date();

  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const time = today.toLocaleTimeString();

  const hour = today.getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (

    <header className="header">

      <div>

        <h1>🚀 TaskFlow</h1>

        <p>{greeting}, Welcome Back 👋</p>

        <span>{date}</span>

        <h3>{time}</h3>

      </div>

      <button
        className="themeBtn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

    </header>

  );

};

export default Header;