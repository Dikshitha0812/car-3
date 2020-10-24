class Game{
    constructor(){

    }
    getState(){
       var dbref= db.ref('gameState')
       dbref.on('value',(data)=>{
           gameState=data.val()

       })
       
        

    }
    updateState(state){
        db.ref('/').update({
            'gameState':state
        })

    }
   async start(){
        if (gameState==0) {
            player=new Player();
            var playerCountref = await db.ref('playerCount').once("value");
            if (playerCountref.exists()) {
              playerCount=playerCountref.val();
              player.getPlayerCount();
            }
            form=new Form();
            form.display();


        }
        
    }
    play (){
        player.title.hide();
        player.greetintg.hide();
        }
}