import unittest
from Python.src.array.elements_sum import sum_of_elements_that_are_multiples_of_k

class TestElementsSum(unittest.TestCase):
  def setUp(self):
    pass

  def test_add(self):
    self.assertEqual(sum_of_elements_that_are_multiples_of_k([1, 2], 2), 2)

if __name__ == "__main__":
  unittest.main()
