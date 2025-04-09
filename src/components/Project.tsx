
type ProjectProps = {

    title: string
    image: string
    deployedLink: string
    gitHubLink: string
}

const Project = ({title,image,deployedLink,gitHubLink}: ProjectProps) => {
    return (
        <div className ="project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>

            <p>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </p>
        </div>
    )}
export default Project