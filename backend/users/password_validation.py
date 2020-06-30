from django.contrib.auth.password_validation import (
    UserAttributeSimilarityValidator,
    MinimumLengthValidator,
    CommonPasswordValidator,
    NumericPasswordValidator)
from django.core.exceptions import ValidationError
import re
from difflib import SequenceMatcher


class UserAttrSimilarityValidator(UserAttributeSimilarityValidator):
    def validate(self, password, user=None):
        if not user:
            return
        for attribute_name in self.user_attributes:
            value = getattr(user, attribute_name, None)
            if not value or not isinstance(value, str):
                continue
            value_parts = re.split(r'\W+', value) + [value]
            for value_part in value_parts:
                if SequenceMatcher(a=password.lower(), b=value_part.lower()).quick_ratio() >= self.max_similarity:
                    raise ValidationError(f'Lozinka je slična nekom od vaših osobnih podataka.')

    def get_help_text(self):
        return 'lozinka ne može sličiti Vašim drugim podacima'


class MinLengthValidator(MinimumLengthValidator):
    def validate(self, password, user=None):
        if len(password) < self.min_length:
            if self.min_length < 5:
                error_message = f'Lozinka je pre kratka. Mora sadržavati barem {self.min_length} znaka.'
            else:
                error_message = f'Lozinka je pre kratka. Mora sadržavati barem {self.min_length} znakova.'
            raise ValidationError(error_message)

    def get_help_text(self):
        if self.min_length < 5:
            help_text = f'lozinka mora sadržavati barem {self.min_length} znaka'
        else:
            help_text = f'lozinka mora sadržavati barem {self.min_length} znakova'
        return help_text


class CommonPassValidator(CommonPasswordValidator):
    def validate(self, password, user=None):
        if password.lower().strip() in self.passwords:
            raise ValidationError('Lozinka je pre učestala.')

    def get_help_text(self):
        return 'lozinka ne može biti učestala (npr. 1234567a, password1234)'


class NumericPassValidator(NumericPasswordValidator):
    def validate(self, password, user=None):
        if password.isdigit():
            raise ValidationError('Ova lozinka sadrži samo brojeve.')

    def get_help_text(self):
        return 'lozinka ne može sadržavati samo brojeve'
