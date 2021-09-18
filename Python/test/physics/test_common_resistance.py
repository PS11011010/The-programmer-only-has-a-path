import unittest
from src.physics.common_resistance import common_resistance


class TestCommonResistance(unittest.TestCase):
    def setUp(self):
        pass

    def test_zero(self):
        self.assertEqual(common_resistance(0, 0, 0), 0)

    def test_negative(self):
        self.assertIsNone(common_resistance(-1, 0, 0),
                          'При отрицательных аргументах вернулся непустой результат')
        self.assertIsNone(common_resistance(0, -3.5, 0),
                          'При отрицательных аргументах вернулся непустой результат')
        self.assertIsNone(common_resistance(0, 0, -105.8),
                          'При отрицательных аргументах вернулся непустой результат')
        self.assertIsNone(common_resistance(0, -9, -105.8),
                          'При отрицательных аргументах вернулся непустой результат')
        self.assertIsNone(common_resistance(-0.0008, -9, -105.8),
                          'При отрицательных аргументах вернулся непустой результат')

    def test_is_equal_one(self):
        self.assertEqual(common_resistance(1, 1, 1), 1/3)

    def test_real_results(self):
        self.assertEqual(common_resistance(2, 7, 5), 5)
        self.assertEqual(common_resistance(3, 0, 10), 0)
        self.assertEqual(common_resistance(40, 0.2, 7.5), 60/47.7)


if __name__ == "__main__":
    unittest.main()