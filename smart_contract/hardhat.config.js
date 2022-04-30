require("@nomiclabs/hardhat-waffle");

module.exports = {
   solidity: '0.8.0',
   networks: {
     ropsten: {
       url: 'https://eth-ropsten.alchemyapi.io/v2/xIZttsvI3EITW9ERIH_A-HNbFQdhLOay',
       accounts: ['cc4e270d0a7390dd0e679cd09348403137d4d662f923946fb14df99558446527']
     }
   } 
}