from django.urls import path
from . import views

urlpatterns = [
    path('',views.RealtorListView.as_view()),
    path('topseller',views.TopSellerView.as_view()),
    # reterieve single realtor
    path('<pk>',views.RealtorListView.as_view())
]