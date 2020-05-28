from django.http.response import HttpResponse

def one_calculator(request):
    first_params = request.GET['first_params']
    second_params = request.GET['second_params']
    operater = request.GET['operater']

    if operater == "add":
        return HttpResponse(float(first_params) + float(second_params));

    if operater == "subtraction":
        return HttpResponse(float(first_params) - float(second_params));

    if operater == "multiplication":
        return HttpResponse(float(first_params) * float(second_params));

    if operater == "division":
        try:
            result = float(first_params) / float(second_params)
        except ZeroDivisionError as e:
            return e

        return HttpResponse(result)

