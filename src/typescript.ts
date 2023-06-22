const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const Personal_account = document.querySelector(
  "#Personal_account"
) as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    Personal_account.value,
    details.value,
    amount.valueAsNumber
  );
});
