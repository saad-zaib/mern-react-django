from django.db import models
from django.utils.timezone import now 
from realtors.models import Realtors


class Listing(models.Model):
    class Saletype(models.TextChoices):
        FOR_SALE = "For Sale"
        FOR_RENT = "For Rent"


    class Hometype(models.TextChoices):
        HOUSE = 'House'
        CONDO = 'Condo'
        TOWNHOUSE = 'Townhouse'

# making one to many relation one realtor with many houses
    realtor = models.ForeignKey(Realtors,on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=225,unique=True)
    title = models.CharField(max_length=225)
    address = models.CharField(max_length=225)
    city = models.CharField(max_length=225)
    state = models.CharField(max_length=225)
    zipcode = models.CharField(max_length=225)
    description = models.TextField(blank=True)
    # The default saletype will be sale but it can be changed to rent 
    sale_type = models.CharField(max_length=225,choices=Saletype.choices,default=Saletype.FOR_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    home_type = models.CharField(max_length=225,choices=Hometype.choices,default=Hometype.HOUSE)
    sqrft = models.IntegerField()
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to="photo/%Y/%m/%d")
    photo_1 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_2 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_3 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_4 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_5 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_6 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_7 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_8 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_9 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_10 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_11 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_12 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_13 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_14 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_15 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_16 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_17 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_18 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_19 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    photo_20 = models.ImageField(upload_to="photo/%Y/%m/%d",blank=True)
    is_published = models.BooleanField(default=True)
    # now is used to associate with that time zone will be helpful for search view
    
    list_date = models.DateTimeField(default=now,blank=True)
    
    def __str_(self):
        return self.title
    

    