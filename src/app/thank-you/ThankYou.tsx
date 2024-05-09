"use client";

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./actions";

const ThankYou = () => {
  const {} = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus(),
  });

  return <div>ThankYou</div>;
};

export default ThankYou;
