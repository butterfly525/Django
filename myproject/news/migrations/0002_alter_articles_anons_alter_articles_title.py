# Generated by Django 4.2.6 on 2023-10-20 02:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='anons',
            field=models.CharField(max_length=250, verbose_name='Анонс'),
        ),
        migrations.AlterField(
            model_name='articles',
            name='title',
            field=models.CharField(max_length=250, verbose_name='Название'),
        ),
    ]
