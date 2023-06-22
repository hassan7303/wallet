"use strict";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const Personal_account = document.querySelector("#Personal_account");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, Personal_account.value, details.value, amount.valueAsNumber);
});
