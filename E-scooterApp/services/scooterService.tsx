// scooterService.ts
const fetchScooterData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/c/d5af-e03c-4bef-a620');
    if (!response.ok) {
      throw new Error('Failed to fetch scooter data');
    }
    return response.json(); // Assumes the API returns a valid JSON array
  } catch (error) {
    console.error('Error fetching scooter data:', error);
    return []; // Return an empty array on error
  }
};

export default fetchScooterData;

