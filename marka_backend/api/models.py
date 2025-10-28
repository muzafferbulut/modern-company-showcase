from django.db import models


class Service(models.Model):

    title = models.CharField(max_length=100, verbose_name="Hizmet Başlığı")
    short_description = models.CharField(max_length=255, verbose_name="Kısa Açıklama")
    description = models.TextField()
    icon_name = models.CharField(
        max_length=50, help_text="Örn: cloud, mobile, gear (Frontend ikon adı)"
    )
    is_featured = models.BooleanField(
        default=False, verbose_name="Anasayfada Öne Çıksın mı?"
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Hizmet"
        verbose_name_plural = "Hizmetler"


class Post(models.Model):

    author = models.ForeignKey(
        "TeamMember", on_delete=models.CASCADE, verbose_name="Yazar"
    )
    title = models.CharField(max_length=200, verbose_name="Makale Başlığı")
    slug = models.SlugField(unique=True, max_length=200, verbose_name="URL Slugı")
    content = models.TextField(verbose_name="İçerik")
    published_date = models.DateTimeField(
        auto_now_add=True, verbose_name="Yayın Tarihi"
    )
    is_published = models.BooleanField(default=True, verbose_name="Yayınlandı mı?")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-published_date"]
        verbose_name = "Makale"
        verbose_name_plural = "Makaleler"


class TeamMember(models.Model):
    name = models.CharField(max_length=100, verbose_name="Ad Soyad")
    role = models.CharField(max_length=100, verbose_name="Pozisyon")
    bio = models.TextField(blank=True, null=True, verbose_name="Kısa Biyografi")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Ekip Üyesi"
        verbose_name_plural = "Ekip Üyeleri"


class ContactMessage(models.Model):
    sender_name = models.CharField(max_length=100)
    sender_email = models.EmailField()
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mesaj: {self.sender_email}"

