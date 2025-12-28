import React, { useState } from "react";
import PlanCard from "./PremiumCard";
import { baseURL, plans } from "../utils/constents";
import axios from "axios";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  const verifyPremiumUser = async () => {
    const res = await axios.get(baseURL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setIsUserPremium(res.data.isPremium);
    }
  };

  // useEffect(() => {
  //   verifyPremiumUser();
  // }, []);

  // by click we hit api it creates an order and gives response back and we also open payment dialog box
  const handleSubscribe = async (name) => {
    console.log(name);
    const order = await axios.post(
      baseURL + "/payment/create",
      { membershipType: name },
      { withCredentials: true }
    );
    console.log(order);
    const { amount, keyId, currency, notes, orderId } = order.data;
    // Open Razorpay Checkout
    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits.
      currency: currency,
      name: "Dev Tinder",
      description: "Test Transaction",
      order_id: orderId, // This is the order_id created in the backend
      prefill: {
        name: notes.firstName,
        email: notes.email,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254", // our choice
      },
      handler: verifyPremiumUser, // 👈 reuse same function
    };
    const rzp = new window.Razorpay(options);
    rzp.open(); // it opens razorpay dialog box
  };

  return isUserPremium ? (
    <div className="flex gap-6 flex-wrap justify-center my-10">
      {plans?.map((plan) => (
        <PlanCard
          key={plan.id}
          name={plan.name}
          price={plan.price}
          popular={plan.popular}
          features={plan.features}
          onSubscribe={handleSubscribe}
        />
      ))}
    </div>
  ) : (
    <div> You are not our premium member</div>
  );
};

export default Premium;
