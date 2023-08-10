from django.core.mail import send_mail, BadHeaderError
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.status import HTTP_500_INTERNAL_SERVER_ERROR
from .models import Contact


# This will sent  a contact email to your email address with the information that the user will enter 
class ContactView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        data = self.request.data

        try:
            send_mail(
                data['subject'],
                'Name: ' + data['name'] + '\nEmail: ' + data['email'] + '\n\nMessage:\n' + data['message'],
                # This will sent  a contact email to your email address with the information that the user will enter
                "copyhaitu420@gmail.com",
                ["copyhaitu420@gmail.com"],
                fail_silently=False
            )

            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()

            return Response({'success': "Message sent successfully"})
        
        except BadHeaderError:
            # If there's a BadHeaderError, it usually means there's an issue with the email subject or content.
            return Response({'error': "Invalid header found. Please check your message details."},
                            status=HTTP_500_INTERNAL_SERVER_ERROR)

        except Exception as e:
            # Catch other exceptions and provide a generic error message to the user.
            return Response({'error': "Message failed to send. Please try again later."},
                            status=HTTP_500_INTERNAL_SERVER_ERROR)
