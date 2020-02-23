function are_user_use_mobile(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      mobile=true;
    } else {
      mobile=false;
    }
    return mobile;
  }
  