from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.conf import settings
from django.contrib import messages
# Import para sent template MAIL PERSONALIZADO
# from templated_email import send_templated_mail

# Create your views here.
def myview(request):
    return render(request, "index.html")

# CONFIGURACION DE 'views.py' PARA ENVIAR EL FORM
def contact(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        like = request.POST.get('like', False)
        subject = 'nutricioncynconcetti'

        template = render_to_string('email_template.html', {
            'name': name,
            'email': email,
            'message': message,
            'like' : like
        })

        # ENVIAR MAIL PERSONALIZADO con estilos HTML CSS
        # template = send_templated_mail(
        #     template_name='templates/email_template.html',
        #     from_email='juanroccia@gmail.com',
        #     recipient_list=[email],
        #     context={
        #         'name': name,
        #         'email': email,
        #         'message': message,
        #         'like': like,
        #     }
        # )

        email = EmailMessage(
            subject,
            template,
            settings.EMAIL_HOST_USER,
            ['cyntia_concetti_@hotmail.com'] # Recibe el mail de la Aplicación
        ) 

        email.content_subtype = "html"
        email.fail_silently = False
        email.send()

        messages.success(request, 'Estaremos en contacto')
        return redirect('/cynCondaApp/#contact')

    return HttpResponse('Error: Solo se permiten solicitudes POST')