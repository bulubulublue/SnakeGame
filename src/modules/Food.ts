export default class Food{
    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('food')!;
    }

    //get X location
    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    //修改位置
    change(){
        //生成随机数，left和top范围为0-290
        //蛇移动一次大小为10，必须为10的整数
        let left = Math.round(Math.random()*29)*10;
        let top = Math.round(Math.random()*29)*10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}