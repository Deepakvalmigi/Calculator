function ClearValue() {
  document.getElementById("result").value = "";
}

function addnumber(num) {
  document.getElementById("result").value += num;
}

function deletechar() {
  var inputField = document.getElementById("result");
  inputField.value = inputField.value.slice(0, -1);
}

function result() {
  try {
    let res = eval(document.getElementById("result").value);
    document.getElementById("result").value = res;
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}

