<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Tablas extends Model
{

    public static function ObtenerDatosPorGenero()
    {
        // crea una consulta a la base de datos 
        return DB::select("SELECT
                    DATE(STR_TO_DATE(ecobici.Fecha_Retiro, '%d-%m-%Y')) as fecha,
                    DAY(STR_TO_DATE(ecobici.Fecha_Retiro, '%d-%m-%Y')) as dia_mes,
                    ecobici.Genero_Usuario,
                    COUNT(ecobici.Bici) as total_bicicletas
                FROM 
                    laravel.ecobici
                WHERE 
                    MONTH(STR_TO_DATE(ecobici.Fecha_Retiro, '%d-%m-%Y')) = 1
                GROUP BY 
                    fecha, dia_mes, Genero_Usuario
                ORDER BY 
                    fecha, dia_mes, Genero_Usuario");
    }

    public static function ObtenerDatosPorRangoEdad()
    {
        return DB::select("SELECT 
                DATE(STR_TO_DATE(ecobici.Fecha_Retiro, '%d-%m-%Y')) as fecha,
                DAY(STR_TO_DATE(ecobici.Fecha_Retiro, '%d-%m-%Y')) as dia_mes,
                FLOOR(ecobici.Edad_Usuario / 5) * 5 as rango_edad,
                COUNT(ecobici.Bici) as total_bicicletas
            FROM 
                laravel.ecobici
            WHERE 
                MONTH(STR_TO_DATE(ecobici.Fecha_Retiro, '%d-%m-%Y')) = 1
            GROUP BY 
                fecha, dia_mes, rango_edad
            ORDER BY 
                fecha, dia_mes, rango_edad
                    ");
    }
}
