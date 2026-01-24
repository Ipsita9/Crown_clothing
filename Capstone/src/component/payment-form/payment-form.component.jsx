import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFromContainer, FormContainer } from "./payment.style";

const PaymentFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [paymentStatus, setPaymentStatus] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (!amount || amount <= 0) {
      setPaymentStatus("❌ Cart total is invalid");
      return;
    }

    setIsProcessing(true);
    setPaymentStatus("");

    try {
      // 1️⃣ Create PaymentIntent on backend
      const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(amount * 100) }), // cents
      });

      if (!response.ok) throw new Error("Backend error");

      const { clientSecret } = await response.json();

      // 2️⃣ Get card details from Stripe element
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card details not entered");

      // 3️⃣ Confirm payment with Stripe
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });

      if (paymentResult.error) {
        setPaymentStatus(`❌ ${paymentResult.error.message}`);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setPaymentStatus("✅ Payment Successful!");
      }
    } catch (error) {
      console.error(error);
      setPaymentStatus("❌ Payment failed. Please try again.");
    }

    setIsProcessing(false);
  };

  return (
    <PaymentFromContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>

        <CardElement />

        <Button
          type="submit"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "PAY NOW"}
        </Button>

        {paymentStatus && (
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            {paymentStatus}
          </p>
        )}
      </FormContainer>
    </PaymentFromContainer>
  );
};

export default PaymentFrom;
