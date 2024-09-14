const web2_projects = [
  // {
  //   title: "Flutter Currency Converter USD to INR App",
  //   description:
  //     "A Flutter app that converts USD to INR in real-time, showcasing integration with external APIs and Flutter's UI capabilities.",
  //   link: "https://github.com/RanjanKumar93/Flutter_CurrencyConverter_USDtoINR_App",
  // },
  // {
  //   title: "Flutter State Management Counter App",
  //   description:
  //     "A Flutter app demonstrating state management techniques, focusing on the counter functionality and its underlying logic.",
  //   link: "https://github.com/RanjanKumar93/flutter_SateManagement_counter_app",
  // },
  // {
  //   title: "Flutter Screen App",
  //   description:
  //     "A Flutter app that showcases multiple screens and navigational features, providing a seamless user experience.",
  //   link: "https://github.com/RanjanKumar93/flutter_screen_app",
  // },
  // {
  //   title: "Flutter Basic Auth App",
  //   description:
  //     "A Flutter app that implements basic authentication using REST APIs, focusing on secure login and registration functionality.",
  //   link: "https://github.com/RanjanKumar93/Flutter-BasicAuth-App",
  // },
  {
    title: "My Portfolio - Ranjan (NextJS)",
    description:
      "A personal portfolio website built using Next.js, showcasing projects, skills, and contact information.",
    link: "https://github.com/RanjanKumar93/My-Portfolio-Ranjan-NextJS",
  },
  {
    title: "Friends Project",
    description:
      "A social networking project that allows users to connect, share posts, and interact with friends, built using web technologies.",
    link: "https://github.com/RanjanKumar93/Friends-Project",
  },
  {
    title: "Find Countries Project",
    description:
      "A web application that helps users find and explore details about countries, integrating external APIs for data.",
    link: "https://github.com/RanjanKumar93/FindCountries-Project",
  },
  {
    title: "Go to 80 Game",
    description:
      "A simple number-based game built with web technologies, focusing on user interaction and logic implementation.",
    link: "https://github.com/RanjanKumar93/go-to-80-game",
  },
  {
    title: "BookBot (Python)",
    description:
      "A Python-based bot for managing book information, automating tasks, and providing book-related services.",
    link: "https://github.com/RanjanKumar93/bookbot_python",
  },
  // {
  //   title: "Flutter Weather App",
  //   description:
  //     "A Flutter application that provides real-time weather information using external APIs, featuring an intuitive user interface.",
  //   link: "https://github.com/RanjanKumar93/flutter_weather_app",
  // },
  {
    title: "Card Game (Python)",
    description:
      "A Python script implementing a classic card game, showcasing game logic and user interaction.",
    link: "https://github.com/RanjanKumar93/projects_python/blob/main/card_game.py",
  },
  {
    title: "Library Management (Python)",
    description:
      "A Python-based library management system, allowing users to manage book inventories, borrow and return books.",
    link: "https://github.com/RanjanKumar93/projects_python/blob/main/library.py",
  },
  {
    title: "Calculator (Python)",
    description:
      "A Python program that simulates a calculator with basic arithmetic operations, handling user inputs and exceptions.",
    link: "https://github.com/RanjanKumar93/projects_python/blob/main/calculator_python.py",
  },
  {
    title: "Python Challenges",
    description:
      "A collection of Python challenges and exercises that demonstrate problem-solving and algorithmic skills.",
    link: "https://github.com/RanjanKumar93/python_challenges/blob/main/pythoonn_challenges.py",
  },
  // {
  //   title: "Flutter Counter App using BLoC",
  //   description:
  //     "A Flutter app demonstrating state management using the BLoC pattern, with a simple counter functionality.",
  //   link: "https://github.com/RanjanKumar93/flutter_counter_app_using_bloc",
  // },
  // {
  //   title: "Flutter CRUD App",
  //   description:
  //     "A Flutter app that implements basic CRUD (Create, Read, Update, Delete) operations using a local database.",
  //   link: "https://github.com/RanjanKumar93/flutter_crud_app",
  // },
  {
    title: "Astroid Game (Python)",
    description:
      "A Python-based game where players navigate through space to avoid asteroids.",
    link: "https://github.com/RanjanKumar93/AstroidGame_python",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("projects-container");

  web2_projects.forEach((project) => {
    const projectCard = `
        <div class="bg-gray-800 p-5 rounded-lg shadow-lg">
          <a href="${project.link}" target="_blank" class="text-blue-400 hover:underline text-xl font-semibold">${project.title}</a>
          <p class="text-gray-400 mt-2">${project.description}</p>
        </div>
      `;
    container.innerHTML += projectCard;
  });
});
