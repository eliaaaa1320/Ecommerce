import Banner2 from "../Banner/BANNER-2.png";
import "../Banner/stylebanners.css";

function Baner2() {
    return (
        <div className="container mt-4">
        <h3>Por eso, nos gusta usar la impresión 3D para todo.</h3>
        <div className="container mt-4">
        <div className="jumbotron">
        <img src={Banner2} alt={Baner2} className="img-fluid"></img>
        </div>
        </div>
        </div>
    );
}

export default Baner2;