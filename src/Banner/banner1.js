import Banner1 from "../Banner/BANNER.png";
import "../Banner/stylebanners.css";

function Baner() {
    return (
        <div className="container mt-4">
        <h2>Sabemos que los objetos nos cambian la vida</h2>
        <div className="container mt-4">
        <div className="jumbotron">
        <img src={Banner1} alt={Baner} className="img-fluid"></img>
        </div>
        </div>
        </div>
    );
}

export default Baner;