const homes = require('../db.json');
let id = 4;

const getHouses = (req, res) => {
    res.status(200).send(homes);
};

const deleteHouse = (req, res) => {
    const homeToDeleteId = +req.params.id;

    for(let i = 0; i < homes.length; i++){
        const home = homes[i];
        if(home.id === homeToDeleteId){
            homes.splice(i, 1);
            return res.status(200).send(homes);
        };
    };
};

const createHouse = (req, res) => {
    const { address, price, imageURL } = req.body;

    const newHome = {
        id,
        address,
        price,
        imageURL
    };

    homes.push(newHome);

    id++;

    res.status(200).send(homes);
};

const updateHouse = (req, res) => {
    const homeToBeUpdated = +req.params.id;
    const {type} = req.body
    
    for(let i = 0; i < homes.length; i++){
        const home = homes[i];
        if(home.id === homeToBeUpdated){
            if(type === 'plus'){
                home.price += 10000
            }
            else{
                home.price -= 10000
            }
            return res.status(200).send(homes)
        }
    }
    
    res.status(400).send(homes)
};


const exportObj = {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse,
};
module.exports = exportObj;