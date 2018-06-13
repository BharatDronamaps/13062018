//BACKEND

function Customer (name,deposit) {
  this.name = name;
  this.initialdeposit = deposit;
}

function Update(initial,deposit,withdrawal) {
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Customer.prototype.fullInfo = function() {
  return this.name + " " + this.initialdeposit;
}

Update.prototype.Total = function() {
  return this.initial + this.deposit - this.withdrawal;
}


//FRONT END
$(document).ready(function() {
  let customer= "";
  $("form#user").submit(function(event) {
    event.preventDefault();


    let inputtedName = $("input#name").val();
    let inputtedDeposit = parseInt($("input#initial").val());

    let newCustomer = new Customer(inputtedName, inputtedDeposit);

    $("ul#customerList").append("<li><span class='contact'>"+newCustomer.name+"</span></li>");

    $(".contact").last().click(function(){
      $(".result").show();
      $("#current").empty();
      $("#current").text(newCustomer.initialdeposit);
      $("#currentName").text(newCustomer.name);
      customer = newCustomer.name;
    });

    $("input#name").val("");
    $("input#initial").val("");

    $("form.update").submit(function(event){

      event.preventDefault();
      let inputtedDeposit = parseInt($("input#deposit").val());
      let inputtedWithdrawal = parseInt($("input#withdraw").val());
      if (isNaN(inputtedDeposit) || isNaN(inputtedWithdrawal)) {
        alert("please enter a good number")
      } else {
          if(newCustomer.name === customer) {
            let newUpdate = new Update(newCustomer.initialdeposit, inputtedDeposit, inputtedWithdrawal);
            newCustomer.initialdeposit = newUpdate.Total();
            $("#current").empty();
            $("#current").text(newCustomer.initialdeposit);
            $("#currentName").text(newCustomer.name);
            $("input#deposit").val("0");
            $("input#withdraw").val("0");
          };
      }


  });

});
});
