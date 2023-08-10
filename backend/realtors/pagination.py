from rest_framework.pagination import PageNumberPagination

#A custom pagination 
class CustomPagination(PageNumberPagination):
    page_size = 5  # Number of items to display per page
    page_size_query_param = 'page_size'
    max_page_size = 100
