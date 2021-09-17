'''
Три резистора R1, R2 и R3 соединены параллельно. Найдите общее сопротивление участка цепи.
https://t.me/the_programmer_only_has_a_path/2
https://t.me/c/1533281926/5
'''
def common_resistance (R1, R2, R3):
  return R1 * R2 * R3 / (R1 + R2 + R3)
