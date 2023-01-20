import projectsHomeItems from "../datas/projectsHome";

export default function ProjectsHome(){

    return(
        <div id="projects-home">
        <h2>Projelerim</h2>   
        <div id="projects-cont-home">
            {
                projectsHomeItems.map(item => {
                    return (
                        <div className="project-item-home">
                            <img className="project-item-home-img"  src={item.img} alt="res"/><br/>
                            <strong>{item.name}</strong><br/>
                            <a href={item.gitHubLink} style={{ textDecoration: 'none',color:"blue" }}>
                                {item.name} projemi Görüntüleyebilirsiniz
                            </a>
                        </div>
                    )
                })
            }
        </div>
    </div>
    );
}
