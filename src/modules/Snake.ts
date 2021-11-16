export default class Snake{
    head:HTMLElement;
    bodies:HTMLCollection;
    snakeEle:HTMLElement;

    constructor(){
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.snakeEle = document.getElementById('snake')!;
        this.bodies = this.snakeEle.getElementsByTagName('div');
    }

    //get position
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;  
    }

    set X(value:number){
        //if new value == current value, return
        if(this.X === value){
            return;
        }

        //x must be 0-290
        if(value < 0 || value > 290){
            throw new Error('game over');
        }

        //向左移动时，不能向右调用,蛇头坐标等于第二个元素坐标，则发生掉头
        //this.bodies[1]&&console.log((this.bodies[1] as HTMLElement).offsetLeft,value);
        //console.log(value);
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
           //继续向反方向移动
           //想要向右走，继续向左走
           if(value > this.X){
                value = this.X - 10;
           }else{
               value = this.X + 10;
           }
        }


        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }

    set Y(value:number){
        //if new value == current value, return
        if(this.Y === value){
            return;
        }

        //x must be 0-290
        if(value < 0 || value > 290){
            throw new Error('game over');
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            //继续向反方向移动
            //想要向右走，继续向左走
            if(value > this.Y){
                 value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
         }

        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    addBody(){
        this.snakeEle.insertAdjacentHTML('beforeend',"<div></div>")
        //this.moveBody();
    }

    //move body
    moveBody(){
        //将后边身体设置为前边身体的位置
        for(let i = this.bodies.length-1 ; i > 0 ; i--){
            //get previous position
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';


        }
    }

    checkHeadBody(){
        for(let i = 1 ; i < this.bodies.length ; i++){
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop){
                throw new Error('Game Over');
                
            }
        }
    }
}