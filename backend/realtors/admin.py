from django.contrib import admin

from .models import Realtors

class RealtorAdmin(admin.ModelAdmin):
    # display these in admin panel
    list_display = ('id','name','email','date_hired')
    list_display_links = ('id','name')
    # search by name field
    search_fields = ['name']
    list_per_page = 25

admin.site.register(Realtors,RealtorAdmin)
