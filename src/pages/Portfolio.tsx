// src/pages/Portfolio.tsx

import Project from '../components/Project'

const projects = [
  {
    title: 'Weather Dashboard',
    image: '/images/weather.png',
    deployedLink: 'https://weather-app-c2do.onrender.com',
    gitHubLink: 'https://github.com/HPoyfair/Weather-App',
  },
  {
    title: 'Recipe Organizer',
    image: '/images/food.png',
    deployedLink: 'https://hpoyfair.github.io/Recipe-Organizer/',
    gitHubLink: 'https://github.com/HPoyfair/Recipe-Organizer',
  },
  {
    title: 'Wedding Website',
    image: '/images/wedding.png',
    deployedLink: 'https://poyfairwedding.com/',
    gitHubLink: 'https://github.com/HPoyfair/weddingWebsite',
  },
  {
    title: 'Candidate Finder',
    image: '/images/candidate.png',
    deployedLink: 'https://candidate-finder-iizo.onrender.com',
    gitHubLink: 'https://github.com/HPoyfair/candidate-finder',
  },
  {
    title: 'Book Search',
    image: '/images/book.png',
    deployedLink: 'https://book-search-gu7q.onrender.com',
    gitHubLink: 'https://github.com/HPoyfair/candidate-finder', // you might want to double check this
  },
  {
    title: 'Kanban Board',
    image: '/images/kan.png',
    deployedLink: 'https://kanban-board-jwt-auth.onrender.com',
    gitHubLink: 'https://github.com/HPoyfair/kanban-board-jwt-auth',
  },
]

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
