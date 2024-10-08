from django.shortcuts import render

def index(request):
    return render(request, 'index.html')


def project(request):
    return render(request, 'project.html')


def contact(request):
    return render(request, 'contact.html')


from django.shortcuts import render
from django.http import HttpResponse


def process_form(request):
    if request.method == 'POST':
        # Extract form values
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        def sendEmail(reciever, subject, body):
            import smtplib
            from email.mime.text import MIMEText
            from email.mime.multipart import MIMEMultipart

            server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
            server.login('work.crepantherx@gmail.com', 'usvb ztnm rlvn dzxs')
            message = MIMEMultipart()
            message['From'] = 'work.crepantherx@gmail.com'
            message['To'] = reciever
            message['Subject'] = subject
            message.attach(MIMEText(body, 'plain'))
            server.sendmail(message['From'], message['To'], message.as_string())

        # Example processing (you can replace this with actual logic)
        # For example, you could send an email or store the data in the database
        sendEmail(email, subject, message)



        # Return a response (this can be customized to show a success page)
        #return True

    # Render the form template for GET request
    html_content = """
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Django Inline Page</title>
        </head>
        <body>
            <h1>Thank you for your message!</h1>
            <p>Expected Response time is in 4-5 hours. Otherwise, please do a follow-up! Thanks!</p>
        </body>
        </html>
        """
    return HttpResponse(html_content)