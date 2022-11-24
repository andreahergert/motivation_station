const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#goal-title").value.trim();
  const content = document.querySelector("#content").value.trim();

  const response = await fetch(`/api/goals`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#new-goal-form")
  .addEventListener("submit", newFormHandler);
