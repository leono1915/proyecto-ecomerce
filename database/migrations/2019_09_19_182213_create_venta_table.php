<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVentaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('venta', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_user')->unsigned();
            $table->bigInteger('id_productos')->unsigned();
           
            $table->text('descripcion');
            $table->decimal('subtotal',10,2);
            $table->decimal('iva',10,2);
            $table->decimal('total',10,2);
            $table->foreign('id_user')->references('id')->on('users');
           
            $table->foreign('id_productos')->references('id')->on('productoventas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('venta');
    }
}
