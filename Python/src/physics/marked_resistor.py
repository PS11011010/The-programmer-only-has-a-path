'''
Первое и второе кольцо. Число десятков и единиц
'''
number_mark = {
    'Black': 0,
    'Brown': 1,
    'Red': 2,
    'Orange': 3,
    'Yellow': 4,
    'Green': 5,
    'Blue': 6,
    'Violet': 7,
    'Grey': 8,
    'White': 9
}

'''
Третье кольцо - множитель. Первое и второе кольцо дадут результат в Омах
'''
multiplicator_mark = {
    'Silver': 1e-2,
    'Gold': 1e-1,
    'Black': 1,
    'Brown': 1e1,
    'Red': 1e2,
    'Orange': 1e3,
    'Yellow': 1e4,
    'Green': 1e5,
    'Blue': 1e6,
    'Violet': 1e7,
    'Grey': 1e8,
    'White': 1e9
}

'''
Четвертое кольцо - погрешность в %
'''
error_mark = {
    'Silver': 10,
    'Gold': 5,
    'Brown': 1,
    'Red': 2,
    'Green': 0.5,
    'Blue': 0.25,
    'Violet': 0.1,
    'Grey': 0.05
}

def is_resistor_compatible(required_resistance, marks):
    """
    На вход функции придет число - требуемое сопротивление в Омах и массив из 4 строк из набора:
    Silver, Gold, Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White или null
    (null в данном случае - тип данных). Вернуть ИСТИНА, если резистор, данные которого описаны
    через цветовую маркировку, подходит под требуемое сопротивление. Учитывать погрешность резистора.
    Например, резистор с коричневой, черной, красной и золотой полосой имеет сопротивление 1кОм
    с погрешностью 5%, значит может заменить резистор в 970 Ом.
    https://t.me/c/1533281926/53
    __author__ = PS11011010
    __description__ = Первые 2 кольца описывают первые 2 цифры номинала.
    Третье кольцо - десятичный множитель для этих чисел. Четвертое кольцо - погрешность в процентах.
    Собственно, нужно сначала узнать идеальное сопротивление, потом найти рамки допустимых сопротивлений,
    с учетом погрешности. И понять: входит ли в эти рамки искомое значение.
    """
    for color in marks:
        # Проверяем все переданные цвета на валидноть. Если не совпало - результат False
        if multiplicator_mark.get(color) is None:
            return False
    
    ideal_resistance = (10 * number_mark.get(marks[0]) + number_mark.get(marks[1])) * multiplicator_mark.get(marks[2])
    resistance = {
        'min': ideal_resistance - (ideal_resistance * error_mark.get(marks[3]) / 100),
        'max': ideal_resistance + (ideal_resistance * error_mark.get(marks[3]) / 100)
    }

    if required_resistance >= resistance.get('min') and required_resistance <= resistance.get('max'):
        return True

    return False