import unittest
from src.interview.rle import RLE


class TestRLE(unittest.TestCase):
    def setUp(self):
        pass

    def test_empty_string(self):
        self.assertEqual(RLE(''), '')

    def test_single_symbol_string(self):
        self.assertEqual(RLE('A'), 'A')

    def test_abc_string(self):
        data = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'

        self.assertEqual(RLE(data), data)

    def test_long_string(self):
        data = 'AAABBCDDDGGGGGGGKKKLMMNNOOOP'
        result = 'A3B2CD3G7K3LM2N2O3P'

        self.assertEqual(RLE(data), result)


if __name__ == "__main__":
    unittest.main()
