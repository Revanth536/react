import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// image : Absoult path(from internet) and realtive path(from computer)
const Cards = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
  <img src="https://upload.wikimedia.org/wikipedia/en/0/0c/OG_Poster.jpg" className="card-img-top" alt="Poster"/>
  <div className="card-body">
    <h5 className="card-title">Movie Poster</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

export default Cards