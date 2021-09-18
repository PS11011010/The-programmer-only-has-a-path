'''
Три резистора R1, R2 и R3 соединены параллельно. Найдите общее сопротивление участка цепи.
https://t.me/the_programmer_only_has_a_path/2
https://t.me/c/1533281926/5
'''
def common_resistance (R1, R2, R3):
  if R1<0 or R2<0 or R3<0:
    return
  if R1 == R2 == R3 == 0:
    return 0
  return R1 * R2 * R3 / (R1 + R2 + R3)
