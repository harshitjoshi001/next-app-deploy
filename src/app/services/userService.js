export const revalidate = async () => {
  fetch("/api/revalidate?secret=SECRET_TOKEN", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.revalidated) {
        console.log(`Page revalidated successfully`);
      } else {
        console.log("Failed to revalidate the page");
      }
    })
    .catch((error) => console.error(error));
};
