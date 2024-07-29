document.getElementById("btn").addEventListener("click", function () {
  var weights = document.getElementById("weigh").value;
  var tal = document.getElementById("tall").value;

  var BMI = weights/ (tal*tal);

  document.getElementById("result").innerHTML = BMI;

  if(BMI<18){
    document.getElementById("result2").innerHTML = "Thin";
  }
  else if(BMI > 18 && BMI <24.9){
    document.getElementById("result2").innerHTML = "Perfect";
  }
  else if(BMI > 25 && BMI <29.9){
    document.getElementById("result2").innerHTML = "Too Thick";
  }
  else if(BMI > 30 && BMI <34.9){
    document.getElementById("result2").innerHTML = "Fat";
  }
  else if(BMI > 35 && BMI <29.9){
    document.getElementById("result2").innerHTML = "Big Fat";
  }
  else if(BMI<40){
    document.getElementById("result2").innerHTML = "Enourmus Fatty";
  }

});