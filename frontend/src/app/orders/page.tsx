"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import OrderCard from "@/components/Orders/OrderCard";
import MainLayout from "@/layouts/admin";
import Breadcrumbs from "@/core/Breadcrum";

type Order = {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  status: "Shipped" | "Delivered" | "Pending" | "Cancelled"; // ✅ Enforce correct types
  orderDate: string;
};


const dummyOrders: Order[] = [
  { id: "ORD001", productName: "iPhone 14 Pro", quantity: 1, price: 1299, status: "Shipped", orderDate: "2024-07-15" },
  { id: "ORD002", productName: "Nike Air Max", quantity: 2, price: 299, status: "Delivered", orderDate: "2024-07-10" },
  { id: "ORD003", productName: "Sony WH-1000XM5", quantity: 1, price: 399, status: "Pending", orderDate: "2024-07-20" },
  { id: "ORD004", productName: "MacBook Air M2", quantity: 1, price: 1499, status: "Cancelled", orderDate: "2024-07-05" },
];


const Orders = () => {
  const [orders] = useState(dummyOrders);

  const links = [{ id: 1, page: "Order Dashboard", link: "/orders" }];

  return (
    <MainLayout title="Orders">
      <>
        <div className="px-2 md:px-0 ml-14 mt-10 mb-10">
          <Breadcrumbs links={links} />
        </div>

        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          My Orders
        </Typography>

        <div className="flex-1 flex">
          <div className="w-[95%] mx-auto mt-4 pb-10 bg-white shadow-xl rounded-md p-5">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default Orders;