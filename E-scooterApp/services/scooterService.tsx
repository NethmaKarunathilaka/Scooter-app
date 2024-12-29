
const fetchScooterData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/c/d5af-e03c-4bef-a620');
    return response.json();
  } catch (error) {
    console.error('Error fetching scooter data:', error);
    return []; 
  }
};

export default fetchScooterData;

