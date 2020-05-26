from django.http.response import HttpResponse
# import HttpException

def calculator_add(request):
    data = _get_data(request)
    return HttpResponse(float(data[0]) + float(data[1]))

def calculator_subtraction(request):
    data = _get_data(request)

    return HttpResponse(float(data[0]) - float(data[1]))

def calculator_division(request):
    data = _get_data(request)

    try:
        result = float(data[0]) / float(data[1])
    except ZeroDivisionError as e:
        return e

    return HttpResponse(result)

def calculator_multiplication(request):
    data = _get_data(request)

    return HttpResponse(float(data[0]) * float(data[1]))

def _get_data(request):
    first_params = request.GET['first_params']
    second_params = request.GET['second_params']
    return first_params, second_params

