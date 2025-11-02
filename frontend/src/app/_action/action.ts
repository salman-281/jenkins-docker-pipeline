const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const deleteUser = async (id: string) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};

export const updateUser = async (id: string, data: any) => {
  console.log("data........", data);
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const updatedData = await response.json();
  return updatedData;
};

export const getUserById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();
  return data;
};