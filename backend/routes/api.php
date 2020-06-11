<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::namespace('api\v1')->middleware('cors')->prefix('v1')->group(function () {
    Route::get('/{binary}', 'GeneralController@show')->where('binary', '[0-1]+');
});
