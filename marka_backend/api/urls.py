from django.urls import path
from . import views

urlpatterns = [
    # hizmetler endpoint
    path("services/", views.ServiceListView.as_view(), name="service-list"),
    path(
        "services/<int:pk>/", views.ServiceDetailView.as_view(), name="service-detail"
    ),
    # blog endpoint
    path("blog/", views.PostListView.as_view(), name="post-list"),
    path("blog/<slug:slug>/", views.PostDetailView.as_view(), name="post-detail"),
    # team endpoint
    path("team/", views.TeamMemberListView.as_view(), name="team-list"),
    # contact endpoint
    path("contact/", views.ContactView.as_view(), name="contact-submit"),
]
