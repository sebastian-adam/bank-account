function OpenAccount(client, initialDeposit) {
  this.client = client;
  this.initialDeposit = initialDeposit;
}

var balance = 0

OpenAccount.prototype.add = function () {
  return this.balance += this.deposit;
}

OpenAccount.prototype.subtract = function () {
  return this.balance -= this.withdrawal;
}


$(document).ready(function () {
  $('#newAccountForm').submit(function (event) {
    event.preventDefault();
    var client = $('#accountName').val();
    var initialDeposit = parseInt($('#initialDeposit').val()) || 0;
    var newAccount = new OpenAccount(client, initialDeposit);
    newAccount.balance = initialDeposit;

    $('#balance').text(newAccount.balance);
    document.getElementById("newAccountButton").disabled = true; 


    $('#processForm').submit(function (event) {
      event.preventDefault();
      var deposit = parseInt($('#deposit').val()) || 0;
      var withdrawal = parseInt($('#withdrawal').val()) || 0;
      newAccount.deposit = deposit;
      newAccount.withdrawal = withdrawal;
      newAccount.add();
      newAccount.subtract();
      $('#balance').text(newAccount.balance);
    });
  });
});
