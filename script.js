let i=0,imgArr=new Array();
imgArr[0]="https://www.ncyu.edu.tw/files/site_content/ncyu/emblem.jpg";
imgArr[1]="https://www.ncyu.edu.tw/files/site_content/ncyu/ncyulogo2.bmp";
imgArr[2]="https://www.ncyu.edu.tw/NewSite/images/opening.jpg";

function showImg(){
  document.getElementById('ico').src = imgArr[i];
  i= (i+1)%3;
}
function show(){
  setInterval(showImg,2000);
}