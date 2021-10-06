from math import sqrt, pow
from unittest import main


def perimeter_square_triangle(*coord):
    '''coord: 0: x1, 1: y1, 2: x2, 3: y2, 4: x3, 5: y3'''
    if len(coord) != 6:
        return
    length = lengths(*coord)
    P = perimeter_triangle(length)
    p = P / 2
    S = square_triangle(p, length)
    return P, S


def perimeter_triangle(length):
    P = 0
    for i in length:
        P += i
    return P


def lengths(*coord):
    length = []
    length.append(length_segment(coord[0], coord[2], coord[1], coord[3]))
    length.append(length_segment(coord[0], coord[4], coord[1], coord[5]))
    length.append(length_segment(coord[2], coord[4], coord[3], coord[5]))
    return length


def length_segment(*coord):
    return sqrt(pow(coord[0]-coord[1], 2) +
                pow(coord[2]-coord[3], 2))


def square_triangle(p, length):
    return sqrt(p * (p-length[0]) * (p-length[1]) * (p-length[2]))


if __name__ == '__main__':
    print(perimeter_square_triangle(10.5, 2, -30.78, 4.1, -5, 0))
