from django import forms

class Contactform(forms.Form):
    message=forms.CharField( max_length=500, required=True,widget=forms.Textarea(),help_text='Wiadomość')
    name=forms.CharField(max_length=50, required=True)
    mail=forms.EmailField(required=True)
    