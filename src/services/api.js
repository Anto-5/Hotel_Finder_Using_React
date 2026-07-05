const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

export async function getHotels() {
  const response = await fetch(`${BASE_URL}/hotels/`);

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  const data = await response.json();

  return data.data;
}

export async function getHotel(id) {
  const response = await fetch(`${BASE_URL}/hotels/${id}/`);

  if (!response.ok) {
    throw new Error("Failed to fetch hotel");
  }

  const data = await response.json();

  return data.data;
}