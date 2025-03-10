"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import OrderCard from "@/components/Orders/OrderCard";
import MainLayout from "@/layouts/admin";
import Breadcrumbs from "@/core/Breadcrum";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";

type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  quantity: number;
  price: number;
  status: "pending" | "delivered" | "cancelled";
  orderDate: string;
};


const Orders = () => {
  const [fetchedOrders, setFetchedOrders] = useState<Order[]>([]); 
  const { authConfig } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_URL;
        const response = await axios.get(`${API_BASE_URL}/api/orders`, authConfig);
        
        // Ensure fetched data is an array of Order
        if (Array.isArray(response.data)) {
          setFetchedOrders(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [authConfig]);

  const links = [{ id: 1, page: "Order Dashboard", link: "/orders" }];

  return (
    <MainLayout title="Orders">
      <>
        <div className="px-2 md:px-0 ml-14 mt-10 mb-10">
          <Breadcrumbs links={links} />
        </div>

        <h1 className="text-3xl font-bold mb-6 text-blue-800">Orders</h1>
        <div className="flex-1 flex">
          <div className="w-[95%] mx-auto mt-4 pb-10 bg-white shadow-xl rounded-md p-5">
            {fetchedOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default Orders;