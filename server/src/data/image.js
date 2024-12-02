const a = async () => {
  try {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products/?categoryId=2"
    );

    const response = await res.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

a();
