'use client';
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import OrderForm from "../Orders/OrderForm";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);

  return (
    <>
      {/* Product Card */}
      <Card sx={{ maxWidth: 350, boxShadow: 3, borderRadius: 2 }}>
        <CardMedia component="img" height="180" image={product.image} alt={product.name} />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
            ₹{product.price} 
          </Typography>
        </CardContent>

        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color="primary" onClick={() => setOpenDetails(true)}>View Details</Button>
          <Button variant="outlined" color="secondary" onClick={() => setOpenOrder(true)}>Place Order</Button>
        </CardContent>
      </Card>

      {/* Dialog (Popup) for View Details */}
      <Dialog open={openDetails} onClose={() => setOpenDetails(false)} fullWidth maxWidth="sm">
        <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
          <CardMedia component="img" height="250" image={product.image} alt={product.name} sx={{ borderRadius: 2, mb: 2 }} />
          <Typography variant="body1"><strong>Description:</strong> {product.description}</Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
            ₹{product.price} 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDetails(false)} color="secondary">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog (Popup) for Order Form */}
      <Dialog open={openOrder} onClose={() => setOpenOrder(false)} fullWidth maxWidth="sm">
        <DialogTitle>Place Order for {product.name}</DialogTitle>
        <DialogContent>
          <OrderForm productId={product.id} productName={product.name} onClose={() => setOpenOrder(false)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenOrder(false)} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCard;
