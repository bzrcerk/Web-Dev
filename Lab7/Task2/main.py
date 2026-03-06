from models.Animal import Animal
from models.Cat import Cat
from models.Dog import Dog

obj = []

a = Animal("Animal", 3, 2.3)
c = Cat("loh", 1, 2.4, "blue")
d = Dog("lohDog", 2, 2.1, "black")

obj.append(a)
obj.append(c)
obj.append(d)

for o in obj:
    print(str(o))
    print(o.move())
    print(o.makeSound())