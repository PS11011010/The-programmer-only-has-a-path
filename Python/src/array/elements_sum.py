def sum_of_elements_that_are_multiples_of_k(arr, k):
    """
    Найти в массиве натуральных чисел A сумму всех элементов, кратных параметру K.
    https://t.me/c/1533281926/13
    __author__ PS11011010
    """
    if k == 0 or len(arr) == 0:
        return
    result = 0
    for item in arr:
        if (item % k) == 0:
            result += item

    return result
