from rest_framework  import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Listing
       
        fields = ['title','address','city','state','price','bedrooms','bathrooms','sale_type','home_type','sqrft','open_house','photo_main','photo_1','slug']
       
class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        # slug allow you to go to correct url when clicked 
        lookup_field = 'slug'
