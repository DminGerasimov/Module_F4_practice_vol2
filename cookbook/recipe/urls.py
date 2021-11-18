from django.urls import path
from .views import CategoriesView, RecipeView, SingleRecipeView

from rest_framework.schemas import get_schema_view

app_name = "recipe"
# app_name will help us do a reverse look-up later.

urlpatterns = [
    path('categories/', CategoriesView.as_view()),
    path('recipes/', RecipeView.as_view()),
    path('recipe/<int:pk>', SingleRecipeView.as_view()),
    path('openapi/',get_schema_view(title = 'cookbook',
                                  description = 'API for cookbook',
                                  version = '0.1'), 
         name = 'openapi-shema'),
    ]
