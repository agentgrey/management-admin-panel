import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { TextField, Button, MenuItem, Typography, Box, Paper, Grid } from "@mui/material";
import { useAuth } from "@/context/AuthContext";

const validationSchema = Yup.object({
  name: Yup.string().required("Product Name is required"),
  price: Yup.number().positive("Must be positive").required("Price is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
});

const ProductForm = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_URL;
  const {authConfig} = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      image: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_URL;
        const response = await axios.post(`${API_BASE_URL}/api/products`, values, authConfig);
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Product Added!",
            text: "Your product has been successfully added.",
          });
          resetForm();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Something went wrong. Please try again.",
        });
      }
    },
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
      <Paper elevation={4} sx={{ maxWidth: 600, width: "100%", p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3} color="primary">
          Add New Product
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Product Name" {...formik.getFieldProps("name")} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="number" label="Price (₹)" {...formik.getFieldProps("price")} error={formik.touched.price && Boolean(formik.errors.price)} helperText={formik.touched.price && formik.errors.price} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={3} label="Description" {...formik.getFieldProps("description")} error={formik.touched.description && Boolean(formik.errors.description)} helperText={formik.touched.description && formik.errors.description} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Image URL" {...formik.getFieldProps("image")} error={formik.touched.image && Boolean(formik.errors.image)} helperText={formik.touched.image && formik.errors.image} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, py: 1.5 }}>
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ProductForm;