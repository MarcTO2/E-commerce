from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
import jwt, datetime
from .models import Product, Order, User
from .serializers import ProductSerializer, OrderSerializer, UserSerializer

class RegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # Ensure this attribute is present
    serializer_class = UserSerializer

    def post(self, request):
       serializer = UserSerializer(data=request.data)
       serializer.is_valid(raise_exception=True)
       serializer.save()
       return Response(serializer.data)
    
class LoginViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # Ensure this attribute is present
    serializer_class = UserSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found')
        
        if not user.check_password(password):
            raise AuthenticationFailed('incorrect password')
        
        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response =  Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            "jwt": token
        }

        return response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # Ensure this attribute is present
    serializer_class = UserSerializer

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User Unauthenticated')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms='HS256')
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User Unauthenticated')
        user = User.objects.get(id=payload['id'])
        serializer = UserSerializer(user)


        return Response(serializer.data)
    

class LogoutViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # Ensure this attribute is present
    serializer_class = UserSerializer
    
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            "message": "Logged Out"
        }

        return response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    


