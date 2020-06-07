from django.http.response import HttpResponse
import json


def one_calculator(request):
    first_params = request.GET['first_params']
    second_params = request.GET['second_params']
    operator = request.GET['operator']

    if operator == "add":
        result = float(first_params) + float(second_params)
        ret = {"data": result}
        return HttpResponse(json.dumps(ret))

    if operator == "subtraction":
        result = float(first_params) - float(second_params)
        ret = {"data": result}
        return HttpResponse(json.dumps(ret))

    if operator == "multiplication":
        result = float(first_params) * float(second_params)
        ret = {"data": result}
        return HttpResponse(json.dumps(ret))

    if operator == "division":
        try:
            result = float(first_params) / float(second_params)
        except ZeroDivisionError as e:
            return e
        ret = {"data": result}
        return HttpResponse(json.dumps(ret))

