from models.Animal import Animal

class Cat(Animal):
    color : str

    def __init__(self, name, age, weight, color):
        super().__init__(name, age, weight)
        self.color = color

    def makeSound(self):
        return f'Cats meow!'

    def move(self):
        return f'Cat moves'

    def __str__(self):
        return f'{self.color} {self.name}'