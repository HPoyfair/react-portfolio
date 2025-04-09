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
