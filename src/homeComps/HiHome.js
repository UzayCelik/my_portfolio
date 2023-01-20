import personInfos from "../datas/personDatas";
export default function HiHome(){
    return (
        <div id="hi-home">
        <div id="home-main-text-a">
            <h1>Merhaba</h1>
            <h2>Kişisel Web Sayfama Hoşgeldiniz</h2>
            <p>Şu an İstanbul Teknik Üniversitesi Uçak Mühendisliği ve Uzay Mühendisliği bölümlerinde öğrenim görmekteyim.</p>
            <p>React ile Front-End projeleri geliştirmekteyim.</p>
            <nav id="github-linkedin">
                <a href={personInfos.gitHub} style={{ textDecoration: 'none',color:"red" }}>Github </a>
                <a href={personInfos.linkedin} style={{ textDecoration: 'none',color:"blue" }}>Linkedin</a>                      
            </nav>
        </div>
        <div id="home-main-img-cont-a">
            <img id = "home-main-img-a" src={require("../images/profil.jpg")} alt="Profil"/>
        </div>
    </div>
    );
}