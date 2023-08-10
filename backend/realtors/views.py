from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveAPIView
from rest_framework import permissions
from .serializers import RealtorSerializer
from .models import Realtors
from .pagination import CustomPagination
from rest_framework.permissions import AllowAny

class RealtorListView(ListAPIView):
    # user will be authenticated in account views so don't need to authenticate again
    permission_classes =(permissions.AllowAny,)
    queryset = Realtors.objects.all()
    serializer_class = RealtorSerializer
    # Custom pagination or None
    pagination_class = CustomPagination 


# reterive single relator by id 
class RealtorView(RetrieveAPIView):
    queryset = Realtors.objects.all()
    serializer_class = RealtorSerializer

class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    # we are filtering the Realtors model for records where the top_seller field is set to True.
    queryset = Realtors.objects.filter(top_seller = True)
    serializer_class = RealtorSerializer
    pagination_class = None