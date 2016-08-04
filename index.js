var alldata = [1, 2, 3, 4, 5, 6] //抽奖数据
var timer; //设定计时器
var val = document.getElementById('INPUT').value;

function change() { //随机抽取一位
  var num = alldata.length - 1;
  val = GetRnd(0, num);
}

function start() {
  clearInterval(timer);
  timer = setInterval('change()', 20); //随机数据变换速度，越小变换的越快
}

function stop() {
  clearInterval(timer);
  alldata.splice(val, 1); //移除抽中的数据
  console.log(alldata);
}

function GetRnd(min, max) {
  return parseInt(Math.random() * (max - min + 1)); //抽奖函数
}
