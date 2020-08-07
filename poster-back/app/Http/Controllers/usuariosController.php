<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Usuarios\CrearRequest;

class usuariosController extends Controller
{

    function crear(CrearRequest $request) {

        try {

            return response()->json($request);

        } catch (\Exception $e) {
            return response()->json(['ExceptionMessage' => $e->getMessage()], 500);
        }
        
        
    }

}
