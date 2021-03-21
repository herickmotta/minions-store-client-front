import React from "react";
import { Box, ImageBox, InfoBox } from "./styles";

export default function ProductSnippet({ item }) {
    const { name, price, photo } = item.product;

    return (
        <Box data-testid="cart-item">
            <ImageBox>
                <img src={photo} alt="product" />
            </ImageBox>
            <InfoBox>
                <h2>{name}</h2>
                <div>
                    <p>{`Quantity: ${item.quantity}`}</p>
                    <p>{`R$ ${((price * item.quantity) / 100)
                        .toFixed(2)
                        .replace(/\./g, ",")}`}</p>
                </div>
            </InfoBox>
        </Box>
    );
}
