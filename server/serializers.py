from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_auth.models import TokenModel

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'is_superuser')

class TokenSerializer(serializers.ModelSerializer):
    user = AuthUserSerializer()
    class Meta:
        model = TokenModel
        fields = ('key', 'user')
