let points = [[12,2], [5,5], [2, 5],[-3,7],[-1,4.5],[-6,4],[-11,-1],[-7,-5],[-1,-7],[3,-8],[5,-11],[4,-7],[6,-5],[3,-6],[2,-6],[-1,-5],[-6,-2],[0,-1],[-1,-3],[2,-2],[3,-1],[5,-1],[4,0],[8,0],[9,1],[12,2],[7.5,3]]; //list資料，


function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
   
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
  stroke()
}
