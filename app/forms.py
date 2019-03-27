from flask_wtf import FlaskForm
#from wtforms import StringField,Form,validators,SubmitField
from wtforms.validators import DataRequired,Email
from wtforms import StringField,TextField
from wtforms import StringField, IntegerField, FileField, SelectField
from wtforms.validators import InputRequired


class UploadForm(FlaskForm):

    description  = TextField(u'des',validators=[DataRequired()])
    photo = FileField(u'pho',validators=[DataRequired()])
      
