class Zamzam{
    skillCoding(){
        console.log("noob");
    }
    levelCoding(){
        console.log("butut");
    }

}
class Diaz{
    skillCoding(){
        console.log("sedang");
    }
    levelCoding(){
        console.log("lumayan");
    }

}
class Ezra{
    skillCoding(){
        console.log("dewa");
    }
    levelCoding(){
        console.log("bagus");
    }

}

const human = [new Zamzam(), new Diaz(), new Ezra()];
human.forEach(human => human.skillCoding());
human.forEach(human => human.levelCoding());