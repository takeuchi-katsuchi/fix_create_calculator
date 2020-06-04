from django.http.response import HttpResponse
import json


def calculator_add(request):
    data = _get_data(request)
    json_str = json.dumps(float(data[0]) + float(data[1]))
    return HttpResponse(json_str)

def calculator_subtraction(request):
    data = _get_data(request)
    json_str = json.dumps(float(data[0]) - float(data[1]))
    return HttpResponse(json_str)

def calculator_multiplication(request):
    data = _get_data(request)
    json_str = json.dumps(float(data[0]) * float(data[1]))
    return HttpResponse(json_str)

def calculator_division(request):
    data = _get_data(request)
    try:
        result = float(data[0]) / float(data[1])
    except ZeroDivisionError as e:
        return e
    return HttpResponse(json.dumps(result))



def _get_data(request):
    first_params = request.GET['first_params']
    second_params = request.GET['second_params']
    return first_params, second_params

