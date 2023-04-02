<?php

namespace App\Http\Controllers;

use App\Models\Tablas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TablasController extends Controller
{
    //
   ///obtiene del model Tablas los datos se la consulta
    public function DatosPorGenero (){  
       $datos = Tablas::ObtenerDatosPorGenero();
       return response()-> json($datos,200);
    }

    public function DatosPorRangoEdad(){
        $datos = Tablas::ObtenerDatosPorRangoEdad();
        return response()-> json($datos,200);
    }
}
