import personInfos from "../datas/personDatas";
import "../styles/Header.css";


export default function Header(){

    return(
        <div id="header-cont">
            <h1 id="header-name-surname" style={{color:"black"}}>{personInfos.name} {personInfos.surname}</h1>            
        </div>
    );
}