from django.urls import path
from . import views


urlpatterns=[
    path('',views.ContactView.as_view(),name='contact')
]


# {
#     "name":"Khazi"
#     "email":"Khazi@khadi.com"
#     "subject":"Rent a Home"
#     "message":"I want a home on rent"
# # }