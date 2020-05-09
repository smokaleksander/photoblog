from django.conf import settings
from django.shortcuts import render, redirect
from .forms import Contactform
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.contrib import  messages
from smtplib import SMTPException
# Create your views here.
def contact(request):
    if request.method=='POST':
        

        form=Contactform(request.POST)
        if form.is_valid():
            message=form.cleaned_data['message']
            name=form.cleaned_data['name']
            usermail=form.cleaned_data['mail']
            to_email=['olo28288@gmail.com']

            context={
                'name':name,
                'message':message,
                'usermail':usermail
            }
            html_message = render_to_string('email.html', context)
            plain_message = strip_tags(html_message)
            try:
                
                send_mail('Formularz kontaktowy z Twojej strony', plain_message, usermail, to_email,html_message=html_message, fail_silently=False)
                messages.error(request,'Wiadomość wysłana')
            except SMTPException as e:
                messages.error(request,'Coś poszło nie tak, spróbuj ponownie')
            
            
    else:
        form=Contactform()
        
    return render(request, 'contact.html',{'form':form})