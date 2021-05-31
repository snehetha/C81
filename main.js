canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="#1D011C";
ctx.lineWidth=5;
ctx.rect(300,140,430,300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#63EEE2";
ctx.lineWidth=3;
ctx.arc(400,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#780B0B";
ctx.lineWidth=3;
ctx.arc(500,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#000000";
ctx.lineWidth=3;
ctx.arc(600,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#5C649C";
ctx.lineWidth=3;
ctx.arc(450,340,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#A10293";
ctx.lineWidth=3;
ctx.arc(550,340,40,0,2*Math.PI);
ctx.stroke();