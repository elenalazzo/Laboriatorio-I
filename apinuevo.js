const fetch = require('node-fetch')
const fs = require('fs');
async function getnuevoBitcoin(){
    try{
        const response = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        let bitcoinsalida = "";
        Array.from(data).forEach(bitc => {
            bitcoinsalida+= `${bitc['rate']}`;
        });

        fs.writeFile('bitcoint.txt', bitcoinsalida, (error) => {
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

