from django.contrib import admin
from .models import Service, TeamMember, Post, ContactMessage


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "is_featured", "icon_name")
    list_filter = ("is_featured",)
    search_fields = ("title", "description")


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ("name", "role")
    search_fields = ("name", "role")


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "is_published", "published_date")
    list_filter = ("is_published", "author")
    search_fields = ("title", "content")
    prepopulated_fields = {"slug": ("title",)}
    date_hierarchy = "published_date"


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("sender_name", "sender_email", "sent_at")
    list_filter = ("sent_at",)
    search_fields = ("sender_name", "sender_email", "message")
    readonly_fields = ("sender_name", "sender_email", "message", "sent_at")
