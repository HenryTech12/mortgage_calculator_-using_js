let repay = document.querySelectorAll('.repay');
let box = document.querySelectorAll('.checkbox');
let i = 0;
let show = document.querySelectorAll('.show');
let popup = document.querySelector('.popup');
let maxInput = document.querySelectorAll('.max');


let value = document.getElementById('value');

repay[0].addEventListener('click', () => {
  repay[0].style.background = "linear-gradient(to left, lightgray 20%,darkgray)";
  repay[1].style.background = "none";
  box[0].checked = true;
  box[1].checked = false;
  value.innerText = 'Calculate ' + repay[0].innerText;
});
repay[1].addEventListener('click', () => {
  repay[1].style.background = "linear-gradient(to left, lightgray 20%,darkgray)";
  repay[0].style.background = "none";
  box[0].checked = false;
  box[1].checked = true;
  value.innerText = 'Calculate ' + repay[1].innerText;
});

let err = document.querySelector('.error');
document.querySelector('.calculate').
addEventListener('click', (event) =>  {
  maxInput.forEach((max) => {
      if(max.value <= 0) {
        event.preventDefault();
        err.innerText = "Make Sure Input Value Is Greater Than Zero.";
        resetAll();
      }
      if(max.value >= 10000) {
        event.preventDefault();
        err.innerText = "Make Sure Input Value is Less Than 100000";
        resetAll();
      }
  });
});

/* APPLY API */
let loan_amount = document.getElementById('lamount');

let interest_rate = document.getElementById('interest');
let term = document.getElementById('term');
let key = '<YOUR API KEY>';


let m_total = document.getElementById('monthly');
let interest_paid = document.getElementById('total');
let status = document.getElementById("status");
const getapi = async() => {
  try {
  popup.scrollIntoView({behavior:'smooth'});
  console.log(loan_amount.value)
  status.innerText = "PENDING";
  
  let api = await fetch(`https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loan_amount.value}&interest_rate=${interest_rate.value}&duration_years=${term.value}`, {
    headers: {
      'X-Api-Key': key,
      'Content-Type':'application/json'
    }
  });
  
  let result = await api.json();
  console.log(result);
  m_total.innerText =   result.monthly_payment.total;
  interest_paid.innerText = result.total_interest_paid;
  status.innerText = 'AVAILABLE';
  //reset to initial state
  loan_amount.value = 0;
  interest_rate.value = 0;
  term.value = 0;
  }
  catch(error) {
    console.log(error);
  }
};

function calculate() {
  
  let rmonth = document.getElementById('rmonth');
  if (box[0].checked) {
    getapi();
    show.forEach((showField) => {
      showField.style.display = "none";
    });
    popup.style.display = "flex";
    rmonth.style.display = 'flex';
    err.innerText = "";
  }
  if (box[1].checked) {
    getapi();
    show.forEach((showField) => {
      showField.style.display = "none";
    });
    popup.style.display = "flex";
    rmonth.style.display = 'none';
    err.innerText = "";
  }
}

  
function resetAll() {
  show.forEach((showField) => {
    showField.style.display = "block";
    popup.style.display = 'none';
    loan_amount.value = 0;
    interest_rate.value = 0;
    term.value = 0;
  });
}
