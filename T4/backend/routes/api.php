<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Http\Controllers\BookController;

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
Route::get('/books', function(){
    return BookResource::collection(Book::all());
});

Route::get('/book/{id}', function($id){
    return new BookResource(Book::findOrFail($id));
});

Route::post('/book', [BookController::class, 'store']);

Route::put('/book/{id}', [BookController::class, 'update']);

Route::delete('/book/{id}', [BookController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
