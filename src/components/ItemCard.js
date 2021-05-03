import { CardDeck, Card } from "react-bootstrap";
import React from "react";
const svgLocation = process.env.PUBLIC_URL + "/icon/cart.svg";

function ItemCard({ cardData }) {
  return (
    <>
      <CardDeck className="mx-auto">
        {cardData.map((data, item) => {
          return (
            <>
              <Card key={data.id}>
                <Card.Img
                  src={data.imgur}
                  width="20px !important"
                  height="200px"
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {/* {data.footer} */}
                    <input></input>
                    <img src={svgLocation} alt="React Logo" />
                  </small>
                </Card.Footer>
              </Card>
            </>
          );
        })}
      </CardDeck>
    </>
  );
}
export default ItemCard;
