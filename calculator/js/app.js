var total;
var prevNumber;
var nextNumber;
var operator;

$(".on").click(function() {
  clearAll();
  $(".output input").val(total);
  
  $(".ce").on("click", clearEntry);

  $(".number").on("click", function() {
    if (total === 0) {
      total = $(this).text();
    }
    else {
      total += $(this).text();
    }
    $(".output input").val(total);
  });
  
  $(".point").on("click", function() {
    total += $(this).text();
  });
  
  $(".add").on("click", function() {
    clickOperator("add");
  });

  $(".subtract").on("click", function() {
    clickOperator("subtract");
  }); 

  $(".multiply").on("click", function() {
    clickOperator("multiply");
  });

  $(".divide").on("click", function() {
    clickOperator("divide");
  });
  
  $(".modulus").on("click", function() {
    clickOperator("modulus");
  });

  $(".radical").on("click", function() {
    prevNumber = getNumber();
    total = Math.pow(prevNumber, 0.5);
    $(".output input").val(total);
  });
  
  $(".equals").on("click", function() {
    if (nextNumber === 0) {
      nextNumber = getNumber();
    }
    if (operator === "add") {
      total = prevNumber + nextNumber;
    }
    else if (operator === "subtract") {
      total = prevNumber - nextNumber;
    }
    else if (operator === "multiply") {
      total = prevNumber * nextNumber;
    }    
    else if (operator === "divide") {
      total = prevNumber / nextNumber;
    }
    else if (operator === "modulus") {
      total = prevNumber % nextNumber;
    }
    $(".output input").val(total);
    prevNumber = total;
  });
  
});

function clearAll() {
  total = 0;
  prevNumber = 0;
  nextNumber = 0;
  operator = "";
  $(".number").off();
  $(".point").off();
  $(".add").off();
  $(".subtract").off();
  $(".multiply").off();
  $(".divide").off();
  $(".equals").off();
  $(".ce").off();
  $(".modulus").off();
  $(".radical").off();
}

function clearEntry() {
  total = 0;
  $(".output input").val(total);
}

function getNumber() {
  var result = parseFloat(total);
  total = 0;
  return result;
}

function clickOperator(symbol) {
  nextNumber = 0;
  prevNumber = getNumber();
  operator = symbol;
}