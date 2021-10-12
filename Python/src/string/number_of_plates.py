# -*- coding: utf-8 -*-
__author__ = "Kasyanov Vladimir"
__email__ = "vovchik81@bk.ru"


def number_of_plates(count: int):
    """
    Дан многоквартирный дом. Получив общее количество квартир на вход функции, выдайте строку формата
    [0-A, 1-B, 2-C,...9-G], где 0-1 - это табличка с цифрой, а A-G - это количество табличек, требуемое
    для нумерации всех квартир.
    https://t.me/c/1533281926/24
    __author__ = PS11011010
    __description__ = Нам нужен словарь для хранения счетчика каждой таблички.
    Идем циклом от 1 до количества квартир включительно. На каждом этапе превращаем число в строку, а строку в массив символов и
    проходим по каждому символу. Увеличиваем на единицу счетчик, который соответствует этому символу.
    Осталось отформатировать результат в нужную строку
    """
    numbers = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0}

    if not isinstance(count, int):
        raise ValueError("Incorrect value!")

    if count <= 0:
        return format_numbers(numbers)

    for i in range(1, count + 1):
        for j in str(i):
            numbers[j] += 1

    return format_numbers(numbers)


def format_numbers(numbers: dict) -> str:
    """
    :param dict numbers: {'0': 3, '1': 5, '2': 5, '3': 3, ... }
    :return: '0-3, 1-5, 2-5, 3-3,...'
    """
    result = []
    for number, count in numbers.items():
        result.append(f'{number}-{count}')
    
    return ', '.join(result)
