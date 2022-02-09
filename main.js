//Variabile che crea Vue
const app= new Vue(
    {
        //Elemento base di vue
        el:'#root',

        //Variabili all'interno di vue
        data:{
           message:'Il mio primo messaggio su vue!!!!',
           img:'img/crash-bandicoot-4-its-about-time-store-art.jpg',
           nome:'Crash-Bandicoot',
           giochi:'Scrivi qualcosa'
        },
        methods:{
            cambiaImmagine:function(){
                if(this.img=='img/crash-bandicoot-4-its-about-time-store-art.jpg' && this.nome== 'Crash-Bandicoot'){
                    this.img='img/returnal-listing-thumb-01-ps5.jpg';
                    this.nome='Returnal';
                }else{
                    this.img='img/crash-bandicoot-4-its-about-time-store-art.jpg';
                    this.nome='Crash-Bandicoot';
                }
            },

            
        }
        
}
);