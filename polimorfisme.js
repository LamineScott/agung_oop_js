class Kucing{
    bersuara(){
        console.log("Meong...");
    }
}
class Anjing{
    bersuara(){
        console.log("Guk guk...");
    }
}
class Hamster{
    bersuara(){
        console.log("Sik sik...");
    }
}
const hewan = [new Kucing(), new Anjing()];
hewan.forEach(hewan => hewan.bersuara());

const hewan3= new Hamster();
hewan3.bersuara(); 