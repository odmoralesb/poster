<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

	protected $casts = [
        'usuario_id' => 'int',
        //'campo_2' => 'float',
        //'campo_3' => 'bool',

    ];
    
    // Para los campos de tipo fecha, No incluye created_at y updated_at
    protected $dates = [
		//'fecha_campo',
	];


	protected $fillable = [
		'titulo',
		'texto',
    ];
    

    //Relacion de uno a muchos (hasmany)
    public function usuario()
	{
        //return $this->belongsTo('App\Article', 'nombre_clave_foranea', 'nombre_clave_otra_tabla');
        //return $this->belongsTo(\App\Models\Post::class, 'usuario_id', 'id');
        return $this->belongsTo(\App\Models\Usuario::class);
	}
}
