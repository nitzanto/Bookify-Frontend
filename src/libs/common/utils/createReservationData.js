export const createReservationData = (restaurantId, reservationDate) => ({
  charge: {
    amount: 18,
    card: {
      cvc: "413",
      exp_month: 12,
      exp_year: 2027,
      number: "4242 4242 4242 4242",
    },
  },
  restaurantId,
  reservationDate,
});
