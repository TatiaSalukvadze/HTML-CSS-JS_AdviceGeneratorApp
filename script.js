function get() {
  const id = document.getElementById("id");
  const advice = document.getElementById("advice");
  const url = "https://api.adviceslip.com/advice";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.slip);
      id.innerHTML = `${data.slip.id}`;
      advice.innerHTML = `“${data.slip.advice}”`;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
