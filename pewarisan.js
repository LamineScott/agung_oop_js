class hewan{
    bersuara(){
        console.log("Suara hewan");
    }
}


class kucing extends hewan{
    mengeong(){
        console.log("Meong");
    }
}

const kucing1 = new kucing();
kucing1.bersuara();
kucing1.mengeong();