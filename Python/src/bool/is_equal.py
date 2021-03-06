# -*- coding: utf-8 -*-
__author__ = "PS11011010"

def deep_equal(a, b):
    """
    Реализуйте метод deepEqual, который принимает в себя два объекта или структуры
    или экземпляра класса (зависит от языка) и возвращает ИСТИНА, если сущности идентичны.
    https://t.me/c/1533281926/49

    Args:
        a any: Сравниваемая сущность 1
        b any: Сравниваемая сущность 2

    Returns:
        bool: Сущности равны?

    Description
        В Python простые вещи делаются просто
        "Примитивные" данные сравниваются через двойное равно.
        Но и все остальное в Python можно тоже сравнить через двойное равно.
        Для тех случаев, когда нужно сравнить не все свойства объекта,
        а только значимые, можно реализовать метод __eq__ Пример  в классе Person ниже
    """
    return a == b

class Person:
    """
    Класс для демонстрации реализации метода сравнения __eq__
    """
    def __init__(self, first_name, last_name, age):
        """
        На инстансе класса хранится много свойств
        """
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def __eq__(self, other):
        """
        Но для сравнения нас интересует только совпадение типа инстанса и возраста
        """
        if isinstance(other, Person):
            return self.age == other.age

        return False