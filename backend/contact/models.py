from django.db import models
from datetime import datetime

# what data message should contain
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=225)
    subject = models.CharField(max_length=225)
    message = models.TextField(max_length=225)
    contact_date = models.DateTimeField(default=datetime.now,blank=True)

    def __str__(self):
        return self.name        