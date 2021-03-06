def lost_array_element(arr):
    """
    Существует упорядоченный массив последовательных натуральных чисел от 1 до N. Например, [1, 2, 3, ... 41, 42].
    Одно число выкинули и массив перемешали.
    Написать функцию, которая примет "испорченный" массив и вернет утраченное число.
    Решать задачу нужно без использования специализированных методов, библиотек и т.д.
    https://t.me/c/1533281926/29
    __author__ r-mcmurphy
    __description__ Изначальный массив - это арифметическая прогрессия
    Получив сумму всех элементов прогрессии, можно найти пропавшее число
    Нарисовался краеугольный случай - пустой массив. Очевидно, что потеряли число 1
    """
    return int(max(arr) * (1 + max(arr)) / 2 - sum(arr)) if len(arr) else 1
