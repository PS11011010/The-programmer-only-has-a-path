import unittest
from unittest import result
from src.string.number_of_plates import number_of_plates, format_numbers

class TestFormatNumbers(unittest.TestCase):
    def setUp(self):
        pass

    def test_empty_data(self):
        numbers = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0}
        result = '0-0, 1-0, 2-0, 3-0, 4-0, 5-0, 6-0, 7-0, 8-0, 9-0'

        self.assertEqual(format_numbers(numbers), result)

    def test_some_data(self):
        numbers = {'0': 3, '1': 5, '2': 5, '3': 3, '4': 7, '5': 8, '6': 0, '7': 1, '8': 6, '9': 42}
        result = '0-3, 1-5, 2-5, 3-3, 4-7, 5-8, 6-0, 7-1, 8-6, 9-42'

        self.assertEqual(format_numbers(numbers), result)

class TestNumberOfPlates(unittest.TestCase):
    def setUp(self):
        pass

    def test_empty_data(self):
        result = '0-0, 1-0, 2-0, 3-0, 4-0, 5-0, 6-0, 7-0, 8-0, 9-0'

        self.assertEqual(number_of_plates(0), result)

    def test_some_data(self):
        result = '0-4, 1-15, 2-15, 3-14, 4-7, 5-4, 6-4, 7-4, 8-4, 9-4'

        self.assertEqual(number_of_plates(42), result)

if __name__ == "__main__":
    unittest.main()