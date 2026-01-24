import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const { amount } = JSON.parse(event.body);

    // Validate amount
    if (!amount || amount <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid amount" }),
      };
    }

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // already in cents from frontend
      currency: "usd",
      automatic_payment_methods: { enabled: true }, // handles cards automatically
    });

    // 🔥 IMPORTANT: send ONLY the client secret
    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    console.error("Stripe Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
