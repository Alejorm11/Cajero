// datos de los usuarios
const accounts = [
  { id: 1, name: "Alejandro", password: "1234", balance: 500 },
  { id: 2, name: "Andrea", password: "5678", balance: 600 },
  { id: 3, name: "Nicolas", password: "abcd", balance: 800 },
];

let selectedAccount = null;

// Función para el ingreso
function ingreso() {
  const Idcuentas = document.getElementById("cuentas").value;
  const password = document.getElementById("contraseña").value;

  const account = accounts.find((acc) => acc.id === Number(Idcuentas));

  if (account && account.password === password) {
    selectedAccount = account;
    document.getElementById("login-error").textContent = "";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones-usuario", "balance").style.display =
      "block";
  } else {
    document.getElementById("login-error").textContent =
      "contraseña incorrecta. Intenta nuevamente.";
  }
}

function consultar() {
  document.getElementById(
    "balance"
  ).textContent = `Saldo actual: $${selectedAccount.balance}`;
}

function depositar() {
  document.getElementById("form-depositar").style.display = "block";
  document.getElementById("form-retirar").style.display = "none";
}

function realizarDeposito() {
  const montoDeposito = parseFloat(
    document.getElementById("montoDepositar").value
  );

  if (!isNaN(montoDeposito) && montoDeposito > 0) {
    const nuevoBalance = selectedAccount.balance + montoDeposito;

    if (nuevoBalance <= 990) {
      selectedAccount.balance = nuevoBalance;
      document.getElementById(
        "balance"
      ).textContent = `Saldo actual: $${selectedAccount.balance}`;
      document.getElementById("form-depositar").style.display = "none";
    } else {
      alert("El monto del depósito excede el límite de saldo permitido.");
    }
  } else {
    alert("Ingrese un monto válido");
  }
}

function retirar() {
  document.getElementById("form-retirar").style.display = "block";
  document.getElementById("form-depositar").style.display = "none";
}

function realizarRetiro() {
  const montoRetiro = parseFloat(document.getElementById("montoRetirar").value);

  if (!isNaN(montoRetiro) && montoRetiro > 0) {
    const nuevoBalance = selectedAccount.balance - montoRetiro;

    if (nuevoBalance >= 10) {
      selectedAccount.balance = montoRetiro;
      document.getElementById("balance").textContent = `Saldo actual: $${selectedAccount.balance}`;
      document.getElementById("form-retirar").style.display = "none";
    } else {
      alert("El monto del retiro es mayor al saldo permitido");
    }
  } else {
    alert("Ingrese un monto válido");
  }
}

function regresar() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("opciones-usuario", "balance").style.display = "none";
  document.getElementById("form-depositar").style.display = "none";
  document.getElementById("form-retirar").style.display = "none";
}
