$(document).ready(function(){
  $("form#results").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var option1 = parseInt($("input:radio[name=option1]:checked").val());
    var option2 = parseInt($("input:radio[name=option2]:checked").val());
    var option3 = parseInt($("input:radio[name=option3]:checked").val());
    var option4 = parseInt($("input:radio[name=option4]:checked").val());
    var option5 = parseInt($("input:radio[name=option5]:checked").val());
    var option6 = parseInt($("input:radio[name=option6]:checked").val());

    console.log(name);
    console.log(option1);
    console.log(option2);
    console.log(option3);
    console.log(option4);
    console.log(option5);
    console.log(option6);
    var optionArr = [option1, option2, option3, option4, option5];

    var results = add(optionArr);

    var print = toggle(results);

      // $(this).children("#results1").show();
      // $("dt").click(function(){
      //   $(this).children("dd").toggle();
      // });
    $("#name").val('');
  });
});

var toggle = function(output){
  $(output).click(function(){
    $(this).children("dd").toggle();
  });
}

var add = function(optionArr){
  var count1 = 0;
  var count2 = 0;
  var output;
  for(var i=0;i<optionArr.length+1;i++){
    if (optionArr[i]===1){
      count1+=1;
    } else{
      count2+=1;
    }
  }

  if (count1>count2){
    output = "#results1";
    return output;
  }else if (count1 === count2){
    output = "#results3";
    return output;
  }else{
    output = "#results2";
    return output;
  }
}
