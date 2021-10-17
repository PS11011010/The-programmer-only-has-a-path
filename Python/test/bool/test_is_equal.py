import unittest
from src.bool.is_equal import deep_equal, Person

class TestDeepEqualPrimitives(unittest.TestCase):
    def setUp(self):
        pass

    def test_equal(self):
        self.assertEqual(deep_equal(True, True), True)
        self.assertEqual(deep_equal(42, 42), True)
        self.assertEqual(deep_equal('foo', 'foo'), True)
        self.assertEqual(deep_equal(None, None), True)

    def test_not_equal(self):
        self.assertEqual(deep_equal(True, False), False)
        self.assertEqual(deep_equal(42, 1), False)
        self.assertEqual(deep_equal('foo', 'bar'), False)
        self.assertEqual(deep_equal(None, False), False)

class TestDeepEqualArrays(unittest.TestCase):
    def setUp(self):
        pass

    def test_equal(self):
        obj = [1, 2, 3]
        obj2 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]

        self.assertEqual(deep_equal(obj, [1, 2, 3]), True)
        self.assertEqual(deep_equal(obj, obj), True)
        self.assertEqual(deep_equal(obj2, [1, 2, 3, [4, 5, 6, [7, 8, 9]]]), True)
        self.assertEqual(deep_equal(obj2, obj2), True)

    def test_not_equal(self):
        obj = [1, 2, 3]
        obj2 = [4, 5, 6]
        obj3 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
        obj4 = [1, 2, 3, [4, 5, 6]]

        self.assertEqual(deep_equal(obj, obj2), False)
        self.assertEqual(deep_equal(obj, obj3), False)
        self.assertEqual(deep_equal(obj, obj4), False)
        self.assertEqual(deep_equal(obj2, obj3), False)
        self.assertEqual(deep_equal(obj2, obj4), False)
        self.assertEqual(deep_equal(obj3, obj4), False)

class TestDeepEqualObjects(unittest.TestCase):
    def setUp(self):
        pass

    def test_equal(self):
        obj = {'foo': 'bar', 'bar': 'baz', 'baz': 'foo'}
        obj2 = {'foo': 'bar', 'bar': 'baz', 'baz': 'foo', 'data': obj}

        self.assertEqual(deep_equal(obj, {'foo': 'bar', 'bar': 'baz', 'baz': 'foo'}), True)
        self.assertEqual(deep_equal(obj, obj), True)
        self.assertEqual(deep_equal(obj2, obj2), True)

    def test_not_equal(self):
        obj = {'foo': 'bar', 'bar': 'baz', 'baz': 'foo'}
        obj2 = {'foo': 'bar', 'bar': 'baz', 'baz': 'foo', 'data': obj}

        self.assertEqual(deep_equal(obj, obj2), False)

class TestDeepEqualClasses(unittest.TestCase):
    def setUp(self):
        pass

    def test_equal(self):
        john = Person('John', 'Doe', 25)
        mary = Person('Mary', 'Doe', 25)

        # В руализации метода __eq__ класса Person значимым является только возраст
        self.assertEqual(deep_equal(john, mary), True)

    def test_not_equal(self):
        john = Person('John', 'Doe', 25)
        # Данные совпадают с Мэри из теста test_equal, но тип сущности другой
        mary = {'first_name': 'Mary', 'last_name': 'Doe', 'age': 25}
        # Тип сущности такой же, как у Джона, но возраст различается
        dude = Person('Dude', '', 42)

        # В руализации метода __eq__ класса Person значимым является только возраст
        self.assertEqual(deep_equal(john, mary), False)
        self.assertEqual(deep_equal(john, dude), False)
        
if __name__ == "__main__":
    unittest.main()