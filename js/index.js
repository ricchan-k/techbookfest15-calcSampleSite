const callCalcApi = async() => {
  const calcresultEl = document.getElementById("calc-result");
  const calcnum1El = document.getElementById("num1");
  const calcnum2El = document.getElementById("num2");
  const calcopeEl = document.getElementById("ope");
  const res = await fetch("http://localhost:8080/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      "num1": calcnum1El.value,
      "num2": calcnum2El.value,
      "ope": calcopeEl.value,
    }),
  });

  

  let resultJson = await res.json();
  document.getElementById("calc-result").textContent = resultJson.result;

};
