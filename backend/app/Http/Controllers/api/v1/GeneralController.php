<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function show(Request $request, $binary)
    {
        return response()->json(['success' => true, 'data' => bindec($binary)], 200);
    }
}
