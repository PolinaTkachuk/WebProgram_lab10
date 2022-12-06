let triangle = document.getElementById('triangle');//треугольник света
let magician = document.getElementById('magician');// маг
let hat = document.getElementById('hat');// шляпа
let bird = document.getElementById('bird');// птица
let rabbit = document.getElementById('rabbit');// кролик
let obj_curtain=document.getElementById('curtain');//занавес
let switch_=document.getElementById('switch_');//выключатель
let lamp=document.getElementsByClassName('lamp');//лампа
check=0;

//при клике на занавес- поднятие
obj_curtain.onclick=function animate_()
{
  check=1;
  let start = Date.now(); // время начала
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
  
    if (timePassed >= 1000) {// он это должен плавно в течение 1 секунды
      clearInterval(timer); // закончить анимацию 
      return;
    }
    //При клике мышью на занавес он должен полностью подниматься
    obj_curtain.style.bottom = timePassed *2+ 'vh';
  }); 
  obj_curtain.style.transition='1s';
};

//при наведении мышки на занавес - поднятие на 5% в теч 200миллисекунд
obj_curtain.onmouseover=function animate_()
{
  if (!check)
  {
    let start = Date.now(); // время начала
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      if (timePassed >= 200) {// он это должен плавно в течение 0,2 секунды
        clearInterval(timer); // закончить 
        return;
      }
      obj_curtain.style.bottom = timePassed/40 + 'vh';
    }); 
    obj_curtain.style.transition='0.2s';
  }
  
}
obj_curtain.onmouseout=function animate_()
{
  if (!check)
  {
  let start = Date.now(); // время начала
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
  
    if (timePassed >= 200) {// он это должен плавно в течение 0,2 секунды
      clearInterval(timer); // закончить 
      return;
    }
    obj_curtain.style.bottom = 0 + 'vh';
  }); 
  obj_curtain.style.transition='0.2s';
 }
}

function UpDownlamp_(){
  if (triangle.className=='of_light') //если лампа была выключена
  {
      triangle.className = 'on_light';//все становится видно 
      magician.style.transition.opacity = '0.2s';
      hat.style.transition.opacity= '0.2s';
      magician.style.opacity = '1';
      hat.style.opacity = '1';
      if (bird.style.bottom>rabbit.style.bottom)
      {
        bird.style.backgroundColor.opacity = '0.5';
        bird.style.opacity = '0.3';
        rabbit.style.opacity = '0';
      }
      else{
        rabbit.style.backgroundColor.opacity = '0.5';
        rabbit.style.opacity = '0.3';
        bird.style.opacity = '0';
      }
  }
  else {//если лампа была включена- выключить
      triangle.className = 'of_light';
      magician.style.opacity = '0';
      hat.style.opacity = '0';
      bird.style.opacity = '0';
      rabbit.style.opacity = '0';
    
  }

}


function DownRabbit(){//опускаем кролика поднимаем птицу

  rabbit_click=false;
  bird_click=true;
  bird.style.transition = 'bottom 0.5s 0.5s, opacity 0.8s'
  rabbit.style.transition = 'bottom 0.5s 0s, opacity 0.8s'
  
  //опускаем кролика на уровень шляпы в теч 0.5 и делаем невидимым за ней
  rabbit.style.bottom='22vh';
  rabbit.style.opacity='0';

  bird.style.backgroundColor.opacity = '0.5';
  bird.style.opacity = '0.3';
  bird.style.bottom = '33vh';
}

function DownBird(){ //опускаем птицу поднимаем кролика
  rabbit_click=true;
  bird_click=false;

  rabbit.style.transition = 'bottom 0.5s 0.5s, opacity 0.8s'
  bird.style.transition = 'bottom 0.5s 0s, opacity 0.8s'

  //птицу опускаем
  bird.style.bottom = '22vh';
  bird.style.opacity='0';

  //кролика поднимаем
  rabbit.style.backgroundColor.opacity = '0.5';
  rabbit.style.opacity = '0.3';
  rabbit.style.bottom = '33vh';

}

//Когда нажимаете (не отпуская кнопку мыши) на лампу, у нее опускается выключатель
function SwitchDown(){
  switch_.style.transition = 'top 0.1s';
  switch_.style.top="11vh";
}
//Когда отпускаете кнопку - выключатель возвращается назад
function SwitchUp(){ 
  switch_.style.transition = 'bottom 0.1s';
  switch_.style.top="12.7vh";
}