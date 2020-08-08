<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    //
    protected $table = 'usuarios';

	protected $casts = [
        //'campo_1' => 'int',
        //'campo_2' => 'float',
        //'campo_3' => 'bool',

    ];
    
    // Para los campos de tipo fecha, No incluye created_at y updated_at
    protected $dates = [
		//'fecha_campo',
	];


	protected $fillable = [
		'nombres',
		'apellidos',
		'email',
		'alias',
		'password'
    ];


    //Para un atributo personalizado: get<Nombre atributo en CamelCase>Attribute, Ejem: getEdadAttribute()
	public function getFullnameAttribute()
	{
		return $this->attributes['fullname'] = $this->nombres.' '.$this->apellidos;
	}    
    

    //Relacion de uno a muchos (hasmany)
    public function posts()
	{
        //return $this->hasMany('App\Article', 'nombre_clave_foranea', 'nombre_clave_primaria_local');
        //return $this->hasMany(\App\Models\Post::class, 'usuario_id', 'id');
        return $this->hasMany(\App\Models\Post::class);
	}


}
