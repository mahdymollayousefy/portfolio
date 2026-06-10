from modeltranslation.translator import register, TranslationOptions
from .models import Project, Skill

@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('title', 'description')

@register(Skill)
class SkillTranslationOptions(TranslationOptions):
    fields = ('name', 'description')
