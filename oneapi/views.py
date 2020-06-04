from django.http.response import HttpResponse
import json


def one_calculator(request):
    first_params = request.GET['first_params']
    second_params = request.GET['second_params']
    operator = request.GET['operator']

    if operator == "add":
        json_str = json.dumps(float(first_params) + float(second_params))
        return HttpResponse(json_str)

    if operator == "subtraction":
        json_str = json.dumps(float(first_params) - float(second_params))
        return HttpResponse(json_str)

    if operator == "multiplication":
        json_str = json.dumps(float(first_params) * float(second_params))
        return HttpResponse(json_str)

    if operator == "division":
        try:
            result = float(first_params) / float(second_params)
        except ZeroDivisionError as e:
            return e

        return HttpResponse(json.dumps(result))

