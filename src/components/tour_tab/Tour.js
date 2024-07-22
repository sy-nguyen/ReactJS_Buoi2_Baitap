import { Card, CardBody, CardSubtitle, CardTitle, Col, Row } from "reactstrap";
import "./tour.css"


export default function Tour(props) {
  const { pro } = props;
  return (
    <Col lg={3} md={6} xs={12} className="mb-4">
      <Card className="card">
        <img className="card-img" src={pro.img} />
        <p className="button-img">12 off</p>
        <CardBody>
          <CardSubtitle className="card-city">
            <i class="fa-solid fa-map-pin"></i>
            {pro.city}
            </CardSubtitle>
          <h5 className="card-name">{pro.name}</h5>
          <p className="card-text">
            From 
            <span className="card-prices">${pro.prices}</span>
            <span className="card-prices-line">$250.00</span>
          </p>
          <div className="card-star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
