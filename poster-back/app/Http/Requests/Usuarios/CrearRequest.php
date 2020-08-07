<?php

namespace App\Http\Requests\Usuarios;


use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

use Illuminate\Foundation\Http\FormRequest;



class CrearRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombres' => 'required',
            'apellidos' => 'required',
            'email' => 'required',
            'email' => 'email',
            'alias' => 'required',
            'password' => 'required',
            'confirmacion_password' => 'required|same:password',
        ];
    }


    public function messages()
    {
        return [
            'nombres.required' => "El nombre es requerido",
            'apellidos.required' => "El apellido es requerido",            
            'email.required' => "El email es requerido",
            'email.email' => "El email es invalido",
            'alias.required' => "El alias es requerido",
            'password.required' => "El password es requerido",
            'confirmacion_password.required' => "El password de confirmacion es requerido",
            'confirmacion_password.same' => "El password de confirmacion es no coincide",
        ];
    }
    
    
    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();
        throw new HttpResponseException(response()->json(['errors' => $errors
        ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
    }
    

}
