# Generated by Django 3.0.2 on 2020-01-30 09:59

from django.db import migrations
from django_scopes import scopes_disabled


def migrate_ingredient_units(apps, schema_editor):
    with scopes_disabled():
        Unit = apps.get_model('cookbook', 'Unit')
        RecipeIngredients = apps.get_model('cookbook', 'RecipeIngredients')

        for u in RecipeIngredients.objects.values('unit').distinct():
            unit = Unit()
            unit.name = u['unit']
            unit.save()

        for i in RecipeIngredients.objects.all():
            i.unit_key = Unit.objects.get(name=i.unit)
            i.save()


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0009_auto_20200130_1056'),
    ]

    operations = [
        migrations.RunPython(migrate_ingredient_units),
    ]
