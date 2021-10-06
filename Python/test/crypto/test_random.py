import unittest
from src.crypto.random import LCG

class TestLCG(unittest.TestCase):
    def setUp(self):
        pass

    def test_result_generated(self):
        self.assertIsNotNone(LCG())

    def test_result_between_zero_and_max(self):
        for i in range(1, 1000):
            self.assertEqual(LCG(i) <= i, True)     


if __name__ == "__main__":
    unittest.main()