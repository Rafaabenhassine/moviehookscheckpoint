import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import "./MovieCard.css"; 
// import "./MovieCard.css"; ajouté pour pouvoir lire MovieCard.css

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem", marginTop: "30px" }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <ReactStars
          count={5}
          value={movie.rate}
          size={24}
          edit={false}
          half={false}
          color2={"#ffd700"}
        />
        <Button href={movie.trailer} variant="primary">
          watch trailer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
