//abstraksi.js
class Mobil {
    constructor(merek){
        this.merek = merek;
    }
    //method public
    nyalakan(){
        console.log("nyalakan mobil");
        this.#prosesMesin();
        console.log("mobil siao digunakan")
    }
    //method private
    #prosesMesin(){
        console.log("proses mesin");
    }
}

const mobil = new Mobil("AlphardJawa");
mobil.nyalakan();
const mobilsport = new mobil ("Mercedes");
mobilsport.jalankan();
const mobilSUV = new Mobil ("Angkot")
mobilSUV.jalankan();
