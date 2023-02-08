$(document).ready(function() {
    var good = false,
      cheap = false,
      fast = false;
    ("#good").on("click", function() {
  
      if (!$("#good").is(":checked")) {
        good = false;
      } else {
        good = true;
        if (fast && cheap) {
          fast = false;
          $("#fast").prop('checked', false);
        }
      }
    });
  
    ("#cheap").on("click", function() {
      if (!$("#cheap").is(":checked")) {
        cheap = false;
      } else {
        cheap = true;
        if (fast && good) {
          good = false;
          $("#good").prop('checked', false);
        }
      }
    });
  
    ("#fast").on("click", function() {
      if (!$("#fast").is(":checked")) {
        fast = false;
      } else {
        fast = true;
        if (cheap && good) {
          cheap = false;
          ("#cheap").prop('checked', false);
        }
      }
    });
  
  });