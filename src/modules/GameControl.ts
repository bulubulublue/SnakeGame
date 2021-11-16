import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;


    direction:string = '';

    //游戏是否结束
    isLive:boolean = true;


    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,1);

        this.init();
    }

    //初始化游戏
    init(){
        document.addEventListener('keydown',this.keydownHandler);
        this.run();
    }

    //keydown event
    keydownHandler = (event:KeyboardEvent) => {
        //判断键盘值
        this.direction = event.key;
        
    }

    //snake move
    run = () => {
        
        //move according to direction
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction){
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }

        this.checkEat(X,Y);

        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            this.isLive = false;
            console.log(e);
            alert('Game Over')
        }



        //游戏没有结束，则继续移动
        this.isLive&&setTimeout(this.run,30*(10-this.scorePanel.level+1))
        
    }

    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}