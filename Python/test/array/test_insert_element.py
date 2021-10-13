import unittest
from src.array.insert_element import insert_element_into_sorted_array

class TestInsertElementIntoSortedArray(unittest.TestCase):
  def setUp(self):
    pass

  def test_append_at_start(self):
    data = [9, 10]
    result = [8, 9, 10]

    self.assertEqual(insert_element_into_sorted_array(data, 8), result)

  def test_append_at_middle(self):
    data = [2, 4, 6, 8, 10]
    result = [2, 4, 5, 6, 8, 10]

    self.assertEqual(insert_element_into_sorted_array(data, 5), result)

  def test_append_at_end(self):
    data = [1, 2]
    result = [1, 2, 3]

    self.assertEqual(insert_element_into_sorted_array(data, 3), result)

  def test_append_into_array_with_equal_element_at_start(self):
    data = [1, 1, 2, 3, 4]
    result = [1, 1, 1, 2, 3, 4]

    self.assertEqual(insert_element_into_sorted_array(data, 1), result)

  def test_append_into_array_with_equal_element_at_middle(self):
    data = [1, 2, 3, 3, 4]
    result = [1, 2, 3, 3, 3, 4]

    self.assertEqual(insert_element_into_sorted_array(data, 3), result)

  def test_append_into_array_with_equal_element_at_end(self):
    data = [1, 2, 3, 4, 4]
    result = [1, 2, 3, 4, 4, 4]

    self.assertEqual(insert_element_into_sorted_array(data, 4), result)

  def test_append_into_array_with_all_equal_elements(self):
    data = [1, 1, 1]
    result = [1, 1, 1, 1]

    self.assertEqual(insert_element_into_sorted_array(data, 1), result)  

if __name__ == "__main__":
  unittest.main()