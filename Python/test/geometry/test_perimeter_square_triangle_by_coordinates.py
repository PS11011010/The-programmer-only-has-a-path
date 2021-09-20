import unittest
from math import sqrt
from src.geometry.perimeter_square_triangle_by_coordinates import \
    perimeter_square_triangle as pst


class TestPerimeterSquareTriangle(unittest.TestCase):
    def test_pst_none(self):
        self.assertIsNone(pst(), 'Return not blank result with blank tuple')
        self.assertIsNone(
            pst(1), 'Return not blank result with less args')
        self.assertIsNone(
            pst(1, 2), 'Return not blank result with less args')
        self.assertIsNone(
            pst(1, 2, 3), 'Return not blank result with less args')
        self.assertIsNone(
            pst(1, 2, 3, 4), 'Return not blank result with less args')
        self.assertIsNone(pst(1, 2, 3, 4, 5),
                          'Return not blank result with less args')
        self.assertIsNone(pst(1, 2, 3, 4, 5, 6, 7),
                          'Return not blank result with more args')

    def test_pst(self):
        self.assertEqual(pst(0, 0, 0, 0, 0, 0), (0, 0))
        self.assertEqual(pst(1, 2, 3, 4, 5, 6), (8 * sqrt(2), 0))
        self.assertTupleEqual(tuple(map(lambda x: round(x, 3),
                                        pst(10.5, 2, -30.78, 4.1, -5, 0))), (83.066, 57.555))


if __name__ == '__main__':
    unittest.main
