const API_BASEURL = "http://localhost:8000/api";

class TablasServices {
    getTablaGeneros() {
        return fetch(API_BASEURL + '/genero')
    }
    getTablaRangoEdad() {
        return fetch(API_BASEURL + '/rangoedad')

    }
}

export default new TablasServices();