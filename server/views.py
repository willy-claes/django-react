import json
from django.shortcuts import render
from django.core.serializers.json import DjangoJSONEncoder
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

def index(request):
    initial_state = {}
    if (not request.user.is_anonymous):
        initial_state = json.dumps({
            'user': {
                'username': request.user.username,
                'is_superuser': request.user.is_superuser,
            }
        })
    initial_state = json.dumps(initial_state, cls=DjangoJSONEncoder)
    return render(request, 'server/index.html', {
        'initial_state': initial_state,
    })
