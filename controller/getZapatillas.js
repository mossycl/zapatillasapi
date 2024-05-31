const { zapatillas } = require("../zapatillas");

const {request, response} = require("express");

const getZapatillas = (req = request, res = response) =>{
    return res.json({
        ok : true,
        zapatillas,
        statusCode : 200
    });
}


const getZapatillaById = (req = request, res = response) => {
    const id = req.params.id;
    
     // Busca el país por su ID
     const zapatilla = 
     zapatillas.find((zapatilla) => {
         return parseInt(zapatilla.id) === parseInt(id)
     });
 
 if (zapatilla) {
     return res.json({
         ok: true,
         zapatilla,
         statusCode: 200
     });
 } else {
     return res.status(404).json({
         ok: false,
         message: "País no encontrado",
         statusCode: 404
     });
 }

}

const getZapatillaByName = (req = request, res = response) =>{
    const name = req.params.name;

    const zapatilla = 
     zapatillas.filter((zapatilla) => {
         return zapatilla.name.toLowerCase().startsWith(name.toLowerCase())
     });

    if (zapatilla) {
        return res.json({
            ok: true,
            zapatilla,
            statusCode : 200
        });
    } else {
        return res.json({
            ok : false,
            message : "No se ha encontrado ningun item con este nombre",
            statusCode : 404
        });
    }
};

const getZapatillaByBrand = (req = request, res = response) =>{
    const brand = req.params.brand;

    const zapatilla = 
     zapatillas.filter((zapatilla) => {
         return zapatilla.brand.toLowerCase().startsWith(brand.toLowerCase())
     });

    if (zapatilla) {
        return res.json({
            ok: true,
            zapatilla,
            statusCode : 200
        });
    } else {
        return res.json({
            ok : false,
            message : "No se ha encontrado ningun item con este nombre",
            statusCode : 404
        });
    }
};

const getZapatillasByTag = (req = request, res = response) => {
    const tag = req.params.tag;

    const zapatoFound =
        zapatillas.filter((zapatilla) => {
            if (zapatilla.tag.includes(tag)) {
                return zapatilla
            };
    });

    if (zapatoFound){
        return res.json({
            ok:true,
            statusCode : 200,
            zapatoFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El producto buscado no existe"
        })
    };
};

const filterByPrice = (req = request, res = response) => {
    const minPrice = req.params.minPrice
    const maxPrice = req.params.maxPrice

    const zapatoFound = 
        zapatillas.filter((zapato) => {
            if (zapato.price <= maxPrice && zapato.price >= minPrice) {
                return zapato
            };
    });

    if (zapatoFound){
        return res.json({
            ok:true,
            statusCode : 200,
            zapatoFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El producto buscado no existe"
        })
    };
}

module.exports = {
    getZapatillas,
    getZapatillaById,
    getZapatillaByName,
    getZapatillaByBrand,
    getZapatillasByTag,
    filterByPrice
};