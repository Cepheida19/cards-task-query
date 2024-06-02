export async function fetchCoins(count) {
    const data = fetch(`https://randomuser.me/api/?results=${count.queryKey[1]}`, {
      method: "GET",
    }).then((res) => res.json())
    .catch((error) => console.log(error));
    return data;
  }