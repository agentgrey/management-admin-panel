import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  quantity: number;
  price: number;
  status: "pending" | "delivered" | "cancelled";
  orderDate: string;
}

const statusColors = {
  pending: "warning",
  delivered: "success",
  cancelled: "error",
} as const;

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, borderRadius: 2, boxShadow: 3, maxWidth: 600, width: "100%" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Customer Name: {order?.customerName}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Customer Email: {order?.customerEmail}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Product Name: {order?.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Order ID: {order?.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ₹{order?.price?.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ordered on: {order?.orderDate}
        </Typography>
      </CardContent>
      <Chip label={order.status} color={statusColors[order.status]} sx={{ fontWeight: "bold" }} />
    </Card>
  );
};

export default OrderCard