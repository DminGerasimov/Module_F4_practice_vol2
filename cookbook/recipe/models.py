from django.db import models

class Category(models.Model):
    category = models.CharField(max_length = 12)

    def __str__(self):
        return self.category

class Recipe(models.Model):
    title = models.CharField(max_length = 120)
    body = models.TextField()
    category = models.ForeignKey('Category', related_name = 'recipes', on_delete = models.CASCADE)

    def __str__(self):
        return self.title
