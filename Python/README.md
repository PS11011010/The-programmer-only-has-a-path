It is the very common directory structure for even a simple Python module.

As you can see, the ***src*** directory contains cody for using in production, and unit tests were separated into their own ***test*** directory.

Please, see [PEP](https://www.python.org/dev/peps/pep-0257/) standart and do not forget to [include](https://github.com/PS11011010/The-programmer-only-has-a-path/blob/main/Python/src/crypto/random.py#L7) the author's name on GitHub and the link to the task in Telegram

***Running a single test module:***

To run a single test module, in this case test_antigravity.py:
> $ cd Python
> 
> $ python -m unittest test.array.test_elements_sum

***Running a single test case or test method:***

Also you can run a single TestCase or a single test method:
> $ cd Python
> 
> $ python -m unittest test.array.test_elements_sum.TestSumOfElementsThatAreMultiplesOfK
> 
> $ python -m unittest test.array.test_elements_sum.TestSumOfElementsThatAreMultiplesOfK.test_zero_k

***Running all tests:***

You can also use [test discovery](https://docs.python.org/2/library/unittest.html#test-discovery) which will discover and run all the tests for you, they must be modules or packages named test*.py (can be changed with the -p, --pattern flag):

> $ cd Python
> 
> $ python -m unittest discover
> 
> $ # Also works without discover for Python 3as suggested by @Burrito in the comments
> 
> $ python -m unittest

This will run all the test*.py modules inside the test package.

___

Python testing in [Visual Studio Code](https://code.visualstudio.com/docs/python/testing)
