from .models import Service, Post, TeamMember, ContactMessage


class ServiceService:

    @staticmethod
    def get_all_services():
        return Service.objects.all()

    @staticmethod
    def get_featured_services():
        return Service.objects.filter(is_featured=True)

    @staticmethod
    def get_services_by_id(service_id):
        try:
            return Service.objects.get(id=service_id)
        except Service.DoesNotExist:
            return None


class BlogService:

    @staticmethod
    def get_all_posts():
        return Post.objects.filter(is_published=True)

    @staticmethod
    def get_latest_posts(count=3):
        return Post.objects.filter(is_published=True).order_by("-published_date")[
            :count
        ]

    @staticmethod
    def get_post_by_slug(slug):
        try:
            return Post.objects.get(slug=slug, is_published=True)
        except Post.DoesNotExist:
            return None


class TeamMemberService:

    @staticmethod
    def get_all_team_members():
        return TeamMember.objects.all()

    @staticmethod
    def get_team_member_by_id(member_id):
        try:
            return TeamMember.objects.get(id=member_id)
        except TeamMember.DoesNotExist:
            return None


class ContactService:

    @staticmethod
    def create_contact_message(data):
        message = ContactMessage.objects.create(
            sender_name=data.get("sender_name"),
            sender_email=data.get("sender_email"),
            message=data.get("message"),
        )

        return message
