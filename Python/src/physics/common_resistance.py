'''
Три резистора R1, R2 и R3 соединены параллельно. Найдите общее сопротивление участка цепи.
https://t.me/the_programmer_only_has_a_path/2
https://t.me/c/1533281926/5
'''


def common_resistance(R1, R2, R3):
    if R1 < 0 or R2 < 0 or R3 < 0:
        return
    if not R1 or not R2 or not R3:
        return 0
    sum = R1 + R2
    mul = R1 * R2
    sum = sum * R3 + mul
    return mul * R3 / sum
