export default class ScorePanel{
    score = 0;
    level = 1;

    //设置最高等级
    maxLevel:number;
    //每级分数
    upScore:number;

    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('scoreEle')!;
        this.levelEle = document.getElementById('levelEle')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        //判断升级
        if(this.score %this.upScore === 0){
            this.addLevel();
        }
    }

    addLevel(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }

    }
}