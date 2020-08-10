<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Authorization, Content-Type');

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/test', function() {
    return "Hola mundo!";
});  


Route::group(['prefix' => 'usuarios'], function() { 

    Route::post('/crear', 'usuariosController@crear'); 

    Route::post('/login', 'usuariosController@login');  

    Route::get('/sesion/{alias}', 'usuariosController@usuario_sesion'); 

    //Route::get('/logout', 'usuariosController@logout');  
    
});
