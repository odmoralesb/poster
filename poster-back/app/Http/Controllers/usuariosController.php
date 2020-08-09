<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Usuarios\CrearRequest;

use App\Models\Usuario;

class usuariosController extends Controller
{

    function crear(CrearRequest $request) {

        try {

            $datos = $request->all();
            $datos['password'] = md5($datos['password']);
            $usuario = new Usuario($datos);

            $usuario->save();

            return response()->json([
                'message' => 'Usuario creado exitosamente',
                'usuario' => Usuario::find($usuario->id)
            ], 200);

            //return response()->json($usuario);

        } catch (\Exception $e) {
            return response()->json(['ExceptionMessage' => $e->getMessage()], 500);
        }
        
        
    }



    function login(Request $request) {
        try {

            $credenciales = $request->all();
            $credenciales['password'] = md5($credenciales['password']);

            $usuario = Usuario::where([
                ['alias', $credenciales['alias']],
                ['password', $credenciales['password']]
            ])->first(); 

            if (!is_null($usuario)) {

                return response()->json([
                    'message' => 'Usuario encontrado',
                    'usuario' => Usuario::find($usuario->id)
                ], 200);

            } else {

                return response()->json([
                    'message' => 'Usuario no encontrado'
                ], 401); 

            }

            //return response()->json($request->all(), 200);

        } catch (\Exception $e) {
            return response()->json(['ExceptionMessage' => $e->getMessage()], 500);
        }
        
        
    }



}
