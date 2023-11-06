import Banner1 from "../Banner/BANNER.png";

function Baner() {
    return (
        <div class="container mt-4">
        <h2>Sabemos que los objetos nos cambian la vida</h2>
        <div class="container mt-4">
        <div class="jumbotron">
        <img src={Banner1} alt={Baner} className="img-fluid"></img>
        </div>
        </div>
        </div>
    );
}

export default Baner;