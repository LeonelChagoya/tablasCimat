<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//genera un json en la url indicada con los datos con la suma total 
//de bicicletas y dia por genero
Route::get('genero','App\Http\Controllers\TablasController@DatosPorGenero');
//genera un json en la url indicada con los datos con la suma total 
//de bicicletas y dia,por rango edad
Route::get('rangoedad','App\Http\Controllers\TablasController@DatosPorRangoEdad');
