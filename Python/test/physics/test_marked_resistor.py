import unittest
from src.physics.marked_resistor import is_resistor_compatible

class TestIsResistorCompatible(unittest.TestCase):
    """
    проверить расчеты можно на сайте https://www.chipdip.ru/calc/resistor?nominal=9.8&unit=3&tolerance=1&mode=4
    """
    def setUp(self):
        pass

    def test_incorrect_data(self):
        self.assertEqual(is_resistor_compatible(42, ['Black', 'Black', 'Gold', 'Wrong']), False)

    def test_ten_percent_error(self):
        self.assertEqual(is_resistor_compatible(1.1, ['Black', 'Brown', 'Black', 'Silver']), True)

    def test_five_percent_error(self):
        self.assertEqual(is_resistor_compatible(280, ['Red', 'Violet', 'Brown', 'Gold']), True)

    def test_one_percent_error(self):
        self.assertEqual(is_resistor_compatible(9750, ['White', 'Grey', 'Red', 'Brown']), True)        


if __name__ == "__main__":
    unittest.main()