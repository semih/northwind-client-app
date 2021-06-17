import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Image, Button } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getById(id).then((result) => {
      setProduct(result.data.data);
    }, []);
  });

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{id}</Card.Header>
            <Card.Meta>{product.title}</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
