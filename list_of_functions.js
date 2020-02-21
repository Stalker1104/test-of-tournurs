function are_user_use_mobile(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      mobile=true;
    } else {
      mobile=false;
    }
    return mobile;
  }
  function console_game_list(string_console,type_of_console_message){


  console_game_string_7_value=console_game_string_6_value;
  console_game_string_6_value=console_game_string_5_value;
  console_game_string_5_value=console_game_string_4_value;
  console_game_string_4_value=console_game_string_3_value;
  console_game_string_3_value=console_game_string_2_value;
  console_game_string_2_value=console_game_string_1_value;
  console_game_string_1_value=string_console

  console_game_string_7.innerHTML=console_game_string_7_value;
  console_game_string_6.innerHTML=console_game_string_6_value;
  console_game_string_5.innerHTML=console_game_string_5_value;
  console_game_string_4.innerHTML=console_game_string_4_value;
  console_game_string_3.innerHTML=console_game_string_3_value;
  console_game_string_2.innerHTML=console_game_string_2_value;
  console_game_string_1.innerHTML=string_console;


  /****************************************************************************************************/
  console_game_string_7_type=console_game_string_6_type;
  console_game_string_6_type=console_game_string_5_type;
  console_game_string_5_type=console_game_string_4_type;
  console_game_string_4_type=console_game_string_3_type;
  console_game_string_3_type=console_game_string_2_type;
  console_game_string_2_type=console_game_string_1_type;
  console_game_string_1_type=type_of_console_message;

  Array_of_types_console= new Array(console_game_string_1_type,console_game_string_2_type,console_game_string_3_type,console_game_string_4_type,console_game_string_5_type,console_game_string_6_type,console_game_string_7_type)
  Array_of_console= new Array(console_game_string_1,console_game_string_2,console_game_string_3,console_game_string_4,console_game_string_5,console_game_string_6,console_game_string_7)
for(var i=0; i<8;i++){
if(Array_of_types_console[i]=="console"){
  Array_of_console[i].style.color="yellow"
}else if(Array_of_types_console[i]=="wrong"){
  Array_of_console[i].style.color="red"
}else if(Array_of_types_console[i]=="result"){
  Array_of_console[i].style.color="white"
}else if(Array_of_types_console[i]=="basic"){
  Array_of_console[i].style.color="blue"
}
}

}

