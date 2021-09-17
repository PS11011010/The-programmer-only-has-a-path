import unittest
from src.physics.common_resistance import common_resistance

class TestCommonResistance(unittest.TestCase):
  def setUp(self):
    pass

  def test_zero(self):
    self.assertIsNone(common_resistance(0, 0, 0), 'При нулевых аргументах вернулся непустой результат')

  def test_empty_arr(self):
    self.assertIsNone(common_resistance(), 'При отсутствии аргументов вернулся непустой результат')

  def test_is_equal_one(self):
    self.assertEqual(common_resistance(1, 1, 1), 1/3)

  def test_real_results(self):
    self.assertEqual(common_resistance(2, 7, 5), 5)
    self.assertEqual(common_resistance(3, 0, 10), 0)
    self.assertEqual(common_resistance(40, 0.2, 7.5), 60/47.7)

if __name__ == "__main__":
  unittest.main()