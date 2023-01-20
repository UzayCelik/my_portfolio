import skillHomeItems from "../datas/skillsHomeDatas";

export default function SkillsHome(){
    
    return(
        <div id="skills-home">
            <h2>Becerilerim</h2>   
            <div id="f-end-cont-home">
                {
                    skillHomeItems.map(item => {
                        return (
                            <div className="skill-item-home">
                                <img className="skill-item-home-img"  src={item.img} alt="res"/><br/>
                                <strong>{item.name}</strong>
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    );
}
