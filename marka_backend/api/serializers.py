from rest_framework import serializers
from .models import Service, Post, TeamMember, ContactMessage


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = [
            "id",
            "title",
            "short_description",
            "description",
            "icon_name",
            "is_featured",
        ]


class TeamMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = TeamMember
        fields = ["id", "name", "role", "bio"]


class PostSerializer(serializers.ModelSerializer):
    author = TeamMemberSerializer(read_only=True)

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "slug",
            "content",
            "author",
            "published_date",
            "is_published",
        ]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "sender_name", "sender_email", "message", "sent_at"]
        read_only_fields = ["sent_at"]
