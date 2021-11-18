# from django.shortcuts import render

from rest_framework.generics import ListAPIView, RetrieveAPIView
from django_filters.rest_framework import DjangoFilterBackend

from .models import Recipe, Category
from .serializer import RecipesSerializer, CategoriesSerializer

class RecipeView(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipesSerializer
    filterset_fields = ['category']

class SingleRecipeView(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipesSerializer

class CategoriesView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer

