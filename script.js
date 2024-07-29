let inputdate = (document.querySelector(".input-day"));
let inputmonth = (document.querySelector(".input-month"));
let inputyear = (document.querySelector(".input-year"));
let dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var check_date = true;
var check_month = true;
var check_year = true;

let outputyear = 0;
let outputmonth = 0;
let outputdate = 0;
let year_p = document.querySelector(".years-output")
let month_p = document.querySelector(".months-output")
let date_p = document.querySelector(".days-output")
let calculate = document.querySelector(".image");

inputyear.addEventListener("change", () => {

    if (Number(inputyear) % 4 == 0) {
        dates[2] = 29;
    }
    else {
        dates[2] = 28;
    }
})
calculate.addEventListener("click", () => {
    if (Number(inputyear.value) > year ||Number(inputyear.value) ==0 ) {
        check_year = false;
        document.querySelector(".input-year").classList.add("border-red");
        document.querySelector(".error-year").classList.remove("hide");
    }
    else {
        check_year = true;
        document.querySelector(".input-year").classList.remove("border-red");
        document.querySelector(".error-year").classList.add("hide");
    }
    if (Number(inputdate.value) > dates[Number(inputmonth.value)] || Number(inputmonth.value) > 12 ||Number(inputdate.value)==0   ) {
        check_date = false;
        document.querySelector(".input-day").classList.add("border-red");
        document.querySelector(".error-day").classList.remove("hide");
    }
    else {
        check_date = true;
        document.querySelector(".input-day").classList.remove("border-red");
        document.querySelector(".error-day").classList.add("hide");
    }
    if (Number(inputmonth.value) > 12||Number(inputmonth.value) == 0) {
        {
            check_month = false;
            document.querySelector(".input-month").classList.add("border-red");
            document.querySelector(".error-month").classList.remove("hide");
        }
    }
    else {
        check_month=true;
        document.querySelector(".input-month").classList.remove("border-red");
        document.querySelector(".error-month").classList.add("hide");
    }

    if (check_date&&check_month&&check_year) {
        age();
    }
})
const date = Number(new Date().getDate());
const month = Number(new Date().getMonth()) + 1;
const year = Number(new Date().getFullYear());
console.log(date, month, year);

function age() {

    outputyear = year - Number(inputyear.value);
    outputmonth = month - Number(inputmonth.value);
    outputdate = date - Number(inputdate.value);
    if (outputmonth < 0) {
        outputyear--;
        outputmonth = outputmonth + 12;
        console.log(outputmonth, "sdada");
    }
    if (outputdate < 0) {
        outputmonth--;
        outputdate += dates[Number(inputmonth.value)];
    }
    console.log(outputyear);
    console.log(outputmonth);
    console.log(outputdate);
    year_p.innerText = outputyear + " ";
    month_p.innerText = outputmonth + " ";
    date_p.innerText = "" + outputdate + " ";

}
