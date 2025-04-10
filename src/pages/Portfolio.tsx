// src/pages/Portfolio.tsx

import Project from '../components/Project'

const projects = [
  {
    title: 'Weather Dashboard',
    image: '/public/images/weather.png', // make sure these exist in /public/images/
    deployedLink: 'https://weather-app-c2do.onrender.com',
    gitHubLink: 'https://github.com/HPoyfair/Weather-App',
  },
  {
    title: 'Recipe Orginizer',
    image: '/public/images/food.png',
    deployedLink: 'https://hpoyfair.github.io/Recipe-Organizer/',
    gitHubLink: 'https://github.com/HPoyfair/Recipe-Organizer',
  },
  
  {
    title: 'Wedding Website',
    image: '/public/images/wedding.png',
    deployedLink: 'https://poyfairwedding.com/',
    gitHubLink: 'https://github.com/HPoyfair/weddingWebsite',
  },
  {
    title: 'Candidate finder',
    image: '/public/images/candidate.png',
    deployedLink: 'https://candidate-finder-iizo.onrender.com',
    gitHubLink: 'https://github.com/HPoyfair/candidate-finder',
  },
 
  {
    title: 'Book Search',
    image: '/public/images/book.png',
    deployedLink: 'https://book-search-gu7q.onrender.com',
    gitHubLink: 'https://github.com/HPoyfair/candidate-finder',
  },
  {
    title: 'kanban board',
    image: '/public/images/kan.png',
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
