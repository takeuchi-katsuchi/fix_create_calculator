from django.http.response import HttpResponse
import json


def calculator_add(request):
    data = _get_data(request)
    result = float(data[0]) + float(data[1])
    ret = {"data": result}
    return HttpResponse(json.dumps(ret))

def calculator_subtraction(request):
    data = _get_data(request)
    result = float(data[0]) - float(data[1])
    ret = {"data": result}
    return HttpResponse(json.dumps(ret))

def calculator_multiplication(request):
    data = _get_data(request)
    result = float(data[0]) * float(data[1])
    ret = {"data": result}
    return HttpResponse(json.dumps(ret))

def calculator_division(request):
    data = _get_data(request)
    try:
        result = float(data[0]) / float(data[1])
    except ZeroDivisionError as e:
        return e
    ret = {"data": result}
    return HttpResponse(json.dumps(ret))

def _get_data(request):
    first_params = request.GET['first_params']
    second_params = request.GET['second_params']
    return first_params, second_params