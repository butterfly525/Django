from .models import Articles
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea

class ArticlesForm(ModelForm):
    class Meta:
        model = Articles
        fields = ['title', 'anons', 'full_text', 'date']

        widgets = {
            "title": TextInput(attrs={
                'class': 'input-post',
                'placeholder': 'Article title'
            }),
            "anons": TextInput(attrs={
                'class': 'input-post',
                'placeholder': 'Announcement of the article'
            }),
            "date": DateTimeInput(attrs={
                'type': 'datetime-local',
                'class': 'input-post'
            }),
            "full_text": Textarea(attrs={
                'class': 'input-post',
                'placeholder': 'Text'
            }),


        }