import axios from "axios";

// Function to fetch data from the Lambda function
const fetchDataFromLambda = async () => {
  try {
    const response = await axios.get(
      "https://9mtvtmekre.execute-api.il-central-1.amazonaws.com/dev/restaurants",
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data from Lambda function:", error);
    return [];
  }
};

// Fetch data without mapping UUIDs
export const restaurantsData = async () => {
  const lambdaData = await fetchDataFromLambda();

  // Use the Lambda function's provided data without modification
  const restaurantsData = lambdaData.map((item) => ({ ...item }));

  return restaurantsData;
};
