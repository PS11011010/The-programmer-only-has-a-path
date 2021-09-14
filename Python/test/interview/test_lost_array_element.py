import unittest
from src.interview.lost_array_element import lost_array_element
from random import shuffle

class TestLostArrayElement(unittest.TestCase):
    def setUp(self):
        pass

    def test_empty_array(self):
        remove = 1

        self.assertEqual(lost_array_element([]), remove)

    def test_ten_elements_array(self):
        l = 10
        remove = 5
        arr = prepare_array(l, remove)

        self.assertEqual(lost_array_element(arr), remove)

    def test_hundred_elements_array(self):
        l = 100
        remove = 42
        arr = prepare_array(l, remove)

        self.assertEqual(lost_array_element(arr), remove)


def prepare_array(length, remove):
    result = list(filter(lambda num: num != remove, list(range(0, length))))
    shuffle(result)

    return result

if __name__ == "__main__":
    unittest.main()