from flask_wtf import FlaskForm
from wtforms import StringField, HiddenField
from wtforms.validators import DataRequired


class TeacherForm(FlaskForm):
    name = StringField("Nombre", validators=[DataRequired()])
    subject = StringField("Materia", validators=[DataRequired()])
