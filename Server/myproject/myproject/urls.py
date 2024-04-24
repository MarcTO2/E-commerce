"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from rest_framework import routers
from django.urls import path, include
from ecommerce.views import ProductViewSet, OrderViewSet, RegisterViewSet, LoginViewSet, UserViewSet, LogoutViewSet

router = routers.DefaultRouter()
router.register(r'register', RegisterViewSet, basename='my-register')
router.register(r'products', ProductViewSet)
router.register(r'order', OrderViewSet)
router.register(r'login', LoginViewSet, basename='my-login')
router.register(r'userview', UserViewSet, basename='my-userview')
router.register(r'logout', LogoutViewSet, basename='my-logout')

urlpatterns = [
    path('', include(router.urls)),
]
