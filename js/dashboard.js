const API = "http://localhost:5000/api/abstract";

async function submitAbstract() {
  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({ title: title.value })
  });

  loadData();
}

async function loadData() {
  const res = await fetch(API, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  });

  const data = await res.json();

  list.innerHTML = data.map(d => `<li>${d.title}</li>`).join("");
}

loadData();