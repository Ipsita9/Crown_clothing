import styled from "styled-components";

export const PaymentFromContainer = styled.div`
  width: 100%;
  min-height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 20px;
  box-sizing: border-box;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 480px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  padding: 30px;
  border-radius: 12px;

  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 600;
    color: #222;
  }

  /* Stripe Card Element styling */
  .StripeElement {
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: white;
  }

  .StripeElement--focus {
    border-color: #6772e5;
  }

  .StripeElement--invalid {
    border-color: #e25950;
  }

  button {
    margin-top: 10px;
  }

  p {
    text-align: center;
    font-size: 14px;
  }
`;
