from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email
from flask_login import UserMixin


class UserLogin(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    passwd = PasswordField('Password', validators=[DataRequired()])


class UserModel(UserMixin):
    def __init__(self, user) -> None:
        self.id = user['username']
        self.email = user['email']
        self.rol = user['rol']
