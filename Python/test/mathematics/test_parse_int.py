import unittest
import sys
from src.mathematics.parse_int import parse_int

class TestParseInt(unittest.TestCase):
    def setUp(self):
        pass

    def test_empty_data(self):
        self.assertEqual(parse_int(''), None)

    def test_incorrect_data(self):
        self.assertEqual(parse_int('foo'), None)
        self.assertEqual(parse_int('foo42'), None)

    def test_partially_correct_data(self):
        self.assertEqual(parse_int('42foo'), 42)

    def test_correct_data(self):
        self.assertEqual(parse_int('1'), 1)
        self.assertEqual(parse_int('42'), 42)
        self.assertEqual(parse_int('999'), 999)

    def test_big_int(self):
        self.assertEqual(parse_int(str(sys.maxsize)), sys.maxsize)

    def test_over_big_int(self):
        # тест на перполнение памяти в числовой переменной. Только вот в Python 3.0 этого не произойдет
        self.assertEqual(parse_int(str(sys.maxsize) + '0'), sys.maxsize * 10)


if __name__ == "__main__":
    unittest.main()