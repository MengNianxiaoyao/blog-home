//时钟
function showTime(){
	var time=document.getElementById('time');
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	if(h<10)
	h='0'+h;
	if(m<10)
	m='0'+m;
	if(s<10)
	s='0'+s;
	time.innerHTML=h+':'+m+':'+s;
	setTimeout(showTime,1000);
}
//霓虹灯
var arr = ["#39c5bb", "#f14747", "#f1a247", "#f1ee47", "#b347f1", "#1edbff", "#ed709b", "#5636ed"];
var idx = 0;
function changeColor() {
	document.getElementById("time").style.textShadow = arr[idx] + " 0 0 15px";
	idx++;
	if (idx == 8) {
		idx = 0;
	}
}
window.onload=showTime,setInterval(changeColor,1200);

	