from django.urls import path

from .views import CacheCheckoutDataView, CheckoutSuccessView, CheckoutView
from .webhooks import webhook

urlpatterns = [

    path('', CheckoutView.as_view(), name='checkout'),
    path('checkout_success/<str:order_number>/', CheckoutSuccessView.as_view(),
         name='checkout_success'),
    path('cache_checkout_data/', CacheCheckoutDataView.as_view(),
         name='cache_checkout_data'),
    path('wh/', webhook, name='webhook'),
]
