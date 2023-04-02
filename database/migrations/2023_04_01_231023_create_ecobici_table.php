<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ecobici', function (Blueprint $table) {
                $table->id();
                $table->string('Genero_Usuario');
                $table->integer('Edad_Usuario');
                $table->integer('Bici');
                $table->integer('Ciclo_Estacion_Retiro');
                $table->date('Fecha_Retiro');
                $table->time('Hora_Retiro');
                $table->integer('Ciclo_EstacionArribo');
                $table->date('Fecha_Arribo');
                $table->time('Hora_Arribo');
                $table->timestamps();        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ecobici');
    }
};
