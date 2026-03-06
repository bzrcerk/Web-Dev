class Animal:
    name: str
    age: int
    weight: float

    def __init__(self, name: str, age: int, weight: float) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def makeSound(self) -> str:
        return f'Animal makes sound!'

    def move(self) -> str:
        return f'Animal moves!'

    def __str__(self) -> str:
        return f'{self.name} {self.age}'

