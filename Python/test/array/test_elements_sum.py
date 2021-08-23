import unittest
from Python.src.array.elements_sum import sum_of_elements_that_are_multiples_of_k


class TestSumOfElementsThatAreMultiplesOfK(unittest.TestCase):
    def setUp(self):
        pass

    def test_zero_k(self):
        self.assertIsNone(sum_of_elements_that_are_multiples_of_k([1, 2, 3], 0),
                          'При нулевом параметре K вернулся непустой результат')

    def test_empty_arr(self):
        self.assertIsNone(sum_of_elements_that_are_multiples_of_k([], 42),
                          'При пустом параметре arr вернулся непустой результат')

    def test_k_is_equal_one(self):
        self.assertEqual(sum_of_elements_that_are_multiples_of_k([1, 2, 3, 4, 5], 1), 15)

    def test_real_results(self):
        self.assertEqual(sum_of_elements_that_are_multiples_of_k([1, 2, 3, 4, 5], 2), 6)
        self.assertEqual(sum_of_elements_that_are_multiples_of_k([1, 2, 3, 4, 5], 3), 3)
        self.assertEqual(sum_of_elements_that_are_multiples_of_k([42, 72, 84], 42), 126)

if __name__ == "__main__":
  unittest.main()
