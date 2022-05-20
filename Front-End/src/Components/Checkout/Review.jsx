import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const payments = [];

const addresses = [];
let buyCart = [];

export default function Review() {
  let buydata2 = [];
  const CheckoutData = useSelector((state) => state.products.checkout);
  const PaymentData = useSelector((state) => state.products.payment);
  const CartData = useSelector((state) => state.products.cart);
  const BuyNowData = useSelector((state) => state.products.buyNow);
  buydata2.push(BuyNowData);
  console.log("BuyNowData", BuyNowData);
  if (buydata2==[]) {
    buyCart = CartData;
  }
 else {
    buyCart = buydata2;
  }
  console.log("CheckoutData", CheckoutData);
  console.log("PaymentData", PaymentData);
  console.log("CartData", CartData);
  let All_Price = 0;
  if (payments.length == 0) {
    payments.push(PaymentData);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {buyCart.map((product) => (
          <ListItem key={product.brand} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.brand} secondary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {CartData.map((e) => {
              All_Price = All_Price + +e.price;
            })}
            {All_Price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {CheckoutData.firstName + CheckoutData.lastName}
          </Typography>
          <Typography gutterBottom>{CheckoutData.address1}</Typography>
          <Typography gutterBottom>{CheckoutData.city}</Typography>
          <Typography gutterBottom>
            {CheckoutData.state + " " + CheckoutData.zip}
          </Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.cardName}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.cardNumber}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
