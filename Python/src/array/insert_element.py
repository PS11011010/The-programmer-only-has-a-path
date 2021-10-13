# -*- coding: utf-8 -*-
__author__ = "PS11011010"

def insert_element_into_sorted_array(arr, n):
    """
    Дан массив упорядоченных (по убыванию или по возрастанию) натуральных чисел.
    Реализовать функцию, которая вставит в массив переданное число N, сохранив сортировку.
    https://t.me/c/1533281926/61

    Description:
        Нам неважно - возрастает массив или убывает, потому что важно следить только
        за изменением неравенства: текущий элемент массива меньше, больше или равен
        новому числу. Понятное дело, что в самом начале неравенство находится в неизвестном
        состоянии. Если у нас не случилось изменение "весов" то нужно вставить новый
        элемент в начало или в конец.

    Args:
        arr list of number: Отсортированный массив
        n number: Добавляемое число

    Returns:
        list of str: Отсортированный массив с новым элементом
    """
    status = None
    itemStatus = ''
    inserted = False

    for i, item in enumerate(arr):
        itemStatus = 'less' if item < n else 'more' if item > n else 'equal'
        if status is None:
            status = itemStatus

        if status != itemStatus:
            arr.insert(i, n)
            inserted = True
            break

    if inserted == False:
        if status == 'less':
            arr.append(n)
        else:
            arr.insert(0, n)


    return arr