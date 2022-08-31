import React, { useContext } from "react";
import { Products } from "../Products";
import { UserContext } from "../../Main";
import { Header } from "../Header";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

export const CartItems = (props) => {
  const rootState = useContext(UserContext);
  let products = rootState ? rootState.UserState.cartItems : [];
  const [totalPrice, setTotalPrice] = React.useState(0);
  const userContext = useContext(UserContext);
  let cartUpdate = (product) => {
    let action = "remove";
    console.log("action: ", action);
    userContext.dispatch({ type: action, value: product });
  };
  React.useEffect(() => {
    let calc_price = 0;
    console.log("in effect: ", products);
    if (products) {
      products.forEach((element) => {
        console.log(
          "produc value: ",
          element[element["selectedPricing"]][0]["value"]
        );
        calc_price += element[element["selectedPricing"]][0]["value"];
      });
    }
    console.log("calculated Price: ", calc_price);
    setTotalPrice(calc_price);
  }, [products]);
  console.log("products: ", products);
  let noofitems = products.length;
  return (
    <>
      <Header></Header>
      {products.length == 0 ? (
        <>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.85)",
              height: "52.1rem",
              
              marginBottom: "0rem",
            }}
          >
            <div style={{ height: "6rem", marginBottom: "0rem" }}>
              <h1 style={{ color: "#20DCEB", textAlign: "center" }}>
                Shopping Cart
              </h1>
            </div>
            <div>
              <h3
                style={{
                  marginBottom: "0rem",
                  color: "#20DCEB",
                  marginLeft: "1rem",
                }}
              >
                {" "}
                {noofitems} Products In Your Cart
              </h3>
              <Grid container spacing={3}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                  <ShoppingCartIcon
                    style={{
                      fontSize: 90,
                      color: "#20DCEB",
                      marginLeft: "2rem",
                    }}
                  />
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={12}>
                  <p style={{ color: "#20DCEB", textAlign: "center" }}>
                    Your cart is empty . Keep shopping to find a product
                  </p>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                  <Link to="/">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#20DCEB", color: "#1F242B" }}
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={5}></Grid>
              </Grid>
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginBottom: "0rem",  }}>
            <div
              style={{
                height: "6rem",
                marginBottom: "0rem",
                backgroundColor: "rgba(0,0,0,0.85)",
              }}
            >
              <h1 style={{ color: "#20DCEB", textAlign: "center" }}>
                Shopping Cart
              </h1>
            </div>
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.85)", height: "auto",paddingBottom:'15rem' }}
            >
              <h3
                style={{
                  marginBottom: "0rem",
                  color: "#20DCEB",
                  marginLeft: "1rem",
                }}
              >
                {" "}
                {noofitems} Products In Your Cart
              </h3>
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  {products.map((product) => {
                    return (
                      <div
                        style={{ marginBottom: "0rem", marginLeft: "0.5rem" }}
                      >
                        {/* <Products filter={[]} products={products} style={{width:'19rem'}}></Products>    */}

                        <Card
                          style={{
                            backgroundColor: "#212121",
                            marginTop: "1rem",
                            height:'10.5rem'
                          }}
                        >
                          <CardActionArea>
                            <Grid container spacing={1}>
                              <Grid item xs={3}>
                                <CardMedia component="img" src={product.img} />
                              </Grid>
                              <Grid item xs={6}>
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    style={{ color: "#20DCEB",textAlign:'left' }}
                                  >
                                    {product.title} 
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    style={{ color: "white" }}
                                  >
                                    <ul>
                                <li> {product.attributes[0]} </li>
                                <li>  {product.attributes[1]} </li>
                                <li> {product.attributes[2]} </li>
                                
                                </ul>
                                 </Typography>
                                </CardContent>
                              </Grid>
                              <Grid item xs={3}>
                                <h2
                                  style={{ color: "#20DCEB",marginTop:'16px',fontSize:'28px',marginBottom:'0rem'}} >
                                  
                                 
                                </h2>
                                <h1 style={{color:'#20DCEB',fontSize:'25px'}}>
                                    $  {product[product["selectedPricing"]][0]["value"]}
                                </h1>

                                <Button className="removeButton" variant="contained" color="primary"
                                  style={{marginRight:'7rem',marginTop:'2.8rem',color:'black',backgroundColor:'#20DCEB'}}
                                  onClick={(event) => {
                                    cartUpdate(product);
                                  }}
                                >
                                  {" "}
                                  Remove
                                </Button>
                              </Grid>
                            </Grid>
                          </CardActionArea>
                        </Card>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={3}>
                  <div style={{ marginLeft: "4rem" }}>
                    <h3
                      style={{
                        color: "#ffffff",
                        marginBottom: "0rem",
                        marginLeft: "1rem",
                      }}
                    >
                      Sub Total :{" "}
                    </h3>
                    <p
                      style={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "39px",
                        marginBottom: "0rem",
                        marginLeft: "1rem",
                      }}
                    >
                      $ {totalPrice}
                    </p>
                  <div>
                  <Button  variant="contained"  style={{marginLeft:"6px",backgroundColor:"#20DCEB",color:"#1F242B"}}>
            Check Out
            </Button>
                  </div>
                
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </>
      )
      }
    </>
  );
};
