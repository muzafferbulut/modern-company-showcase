from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import (
    ServiceSerializer,
    PostSerializer,
    ContactMessageSerializer,
    TeamMemberSerializer,
)
from .services import ServiceService, BlogService, TeamMemberService, ContactService


class ServiceListView(APIView):

    def get(self, request, format=None):
        is_featured = request.query_params.get("featured", "false").lower() == "true"

        if is_featured:
            services = ServiceService.get_featured_services()
        else:
            services = ServiceService.get_all_services()

        serializer = ServiceSerializer(services, many=True)

        return Response(serializer.data)


class ServiceDetailView(APIView):

    def get(self, request, pk, format=None):

        service = ServiceService.get_services_by_id(pk)

        if service is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ServiceSerializer(service)
        return Response(serializer.data)


class PostListView(APIView):

    def get(self, request, format=None):

        is_latest = request.query_params.get("latest", "false").lower() == "true"

        if is_latest:
            posts = BlogService.get_latest_posts(count=3)
        else:
            posts = BlogService.get_all_posts()

        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


class PostDetailView(APIView):

    def get(self, request, slug, format=None):

        post = BlogService.get_post_by_slug(slug)

        if post is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = PostSerializer(post)
        return Response(serializer.data)


class TeamMemberListView(APIView):

    def get(self, request, format=None):
        members = TeamMemberService.get_all_team_members()
        serializer = TeamMemberSerializer(members, many=True)
        return Response(serializer.data)


class ContactView(APIView):

    def post(self, request, format=None):
        serializer = ContactMessageSerializer(data=request.data)

        if serializer.is_valid():
            ContactService.create_contact_message(serializer.validated_data)

            return Response(
                {"success": "Mesajınız başarıyla alınmıştır."},
                status=status.HTTP_201_CREATED,
            )

        # Geçersiz veri yanıtı
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
