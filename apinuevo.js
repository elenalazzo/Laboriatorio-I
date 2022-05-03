const fetch = require('node-fetch')
async function getnuevoBitcoin(){
    try{
        const response = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response();
        let bitcoinsalida = "";
        Array.from(data).forEach(bit => {
            bitcoinsalida+= `${bit['rate']}`;
        });

        fs.writefile('bitcoint.txt', bitcoinsalida, (error) => {
            if (error){
                console.log(error);
                return;
            }
            console.log('se ha creado este archivo');
        })

        
    }catch(error){
        console.log(error)
    }
    
}
getnuevoBitcoin();

