from django.urls import path

from . import views

urlpatterns = [
    path('teachers/', views.TeacherView.as_view()),
]