import React, { useState } from "react";
import CarouselImg from "../../assets/images/carousel.jpg";
import CoffeeCard from "../CoffeeCard";
import { Container, Box, Grid, Button } from "@mui/material";


export default function Home({coffee}) {
 
  const [coffeeData, filterCoffeeData] = useState(coffee);
  const categories = ['all', 'coffee','cat-3', 'Categ-2']
  const filterData = (by) => { 
    if (by == 'all') {
      filterCoffeeData(coffee)
    } else {
       const filtered = coffeeData?.filter((cf) => cf.category === by);
       filterCoffeeData(filtered);
    }
   
  }
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={0} justify="center">
          <Grid item md={12} sx={{ backgroundColor: "yellow" }}>
            <Box alignItems="center" display={{ xs: "none", lg: "flex" }}>
              <img src={CarouselImg} alt="yes" height={300} width="50%" />
              <img src={CarouselImg} alt="yes" height={300} width="50%" />
            </Box>
          </Grid>
          <Grid item md={12} sx={{ mt: 3, backgroundColor: "white" }}>
            <Box
              alignItems="center"
              justifyContent="center"
              display={{ xs: "none", lg: "flex" }}
              sx={{ m: 2 }}
            >
              {categories.map((cat) => {
                return (
                  <Button
                    variant="contained"
                    sx={{ mx: 2, backgroundColor: "#103037" }}
                    onClick={() => filterData(cat)}
                  >
                    {cat}
                  </Button>
                )
              })}
              
              
            </Box>
          </Grid>
          {coffeeData?.map((cof) => {
            return (
              <Grid item md={3} xs={12}>
                <CoffeeCard data={cof} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
