from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import razorpay

def index(request):
    return render(request, 'index.html')


def project(request):
    if request.method == 'POST':
        client = razorpay.Client(auth=("rzp_test_zpTpnWy4S0rI5D", "2xttOGE0eCmhScraxt0PoHOz"))
        DATA = {
            "amount": 50000,  # Amount in paise (500 INR)
            "currency": "INR",
            "receipt": "receipt#1",
            "payment_capture": 1  # Auto capture after payment
        }
        payment = client.order.create(data=DATA)

        context = {
            'razorpay_order_id': payment['id'],  # Pass order ID to frontend
            'razorpay_key_id': "rzp_test_zpTpnWy4S0rI5D",
            'amount_in_paise': 50000,
            'company_name': "Your Company",
            'company_logo_url': "https://yourcompany.com/logo.png",
        }

        return render(request, 'project.html', context)
    return render(request, 'project.html')



def contact(request):
    return render(request, 'contact.html')





def process_form(request):
    if request.method == 'POST':
        # Extract form values
        #email = request.POST.get('email')
        message = request.POST.get('email') + request.POST.get('message')
        subject = request.POST.get('subject')
        #message = request.POST.get('message')

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
        sendEmail('work.crepantherx@gmail.com', subject, message)



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




import razorpay
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Initialize Razorpay client with your API keys
razorpay_client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
def create_order(request):
    """
    Create a Razorpay order and send the order ID to the frontend.
    """
    amount = 50000  # amount in paise (e.g., ₹500)
    currency = 'INR'

    razorpay_order = razorpay_client.order.create({
        "amount": amount,
        "currency": currency,
        "payment_capture": '1'  # Auto capture after successful payment
    })

    order_id = razorpay_order['id']

    # You can pass other context information such as user details
    context = {
        "razorpay_order_id": order_id,
        "razorpay_key_id": settings.RAZORPAY_KEY_ID,
        "amount_in_paise": amount,
        "user": request.user,  # assuming user is logged in
        "company_name": "Your Company",
        "company_logo_url": "https://yourcompany.com/logo.png"
    }

    return JsonResponse(context)


@csrf_exempt
def verify_payment(request):
    """
    Verify the payment by comparing the signature returned from Razorpay.
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            razorpay_payment_id = data.get("payment_id")
            razorpay_order_id = data.get("order_id")
            razorpay_signature = data.get("signature")

            # Create payload for verification
            params_dict = {
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            }

            # Verify the signature using Razorpay SDK
            result = razorpay_client.utility.verify_payment_signature(params_dict)

            if result is None:
                # Payment successful, save the order and payment details to your database
                return JsonResponse({'status': 'success'})
            else:
                return JsonResponse({'status': 'failed', 'message': 'Signature verification failed.'}, status=400)

        except Exception as e:
            return JsonResponse({'status': 'failed', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'failed', 'message': 'Invalid request method.'}, status=405)
