const API_BASEURL = "http://localhost:8000/api";

class TablasServices {
    getTablaGeneros = async() => {
        return await fetch(API_BASEURL + '/genero')
    }
    getTablaRangoEdad= async() =>  {
        return await fetch(API_BASEURL + '/rangoedad')
    }
}

export default new TablasServices();
