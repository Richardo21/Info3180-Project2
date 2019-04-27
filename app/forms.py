from flask_wtf import FlaskForm
#from wtforms import StringField,Form,validators,SubmitField
from wtforms.validators import DataRequired,Email
from wtforms import StringField,TextField, validators, TextAreaField, PasswordField
from wtforms import StringField, IntegerField, FileField, SelectField
from wtforms.validators import InputRequired
from wtforms.fields.html5 import EmailField
from flask_wtf.file import FileField, FileAllowed, FileRequired

      
class LoginForm(FlaskForm):
    username=TextField('Username',validators=[DataRequired()])
    password=PasswordField('Password',validators=[DataRequired()])
    
class RegistrationForm(FlaskForm):
    profile_photo = FileField('Photo', validators = [FileRequired(), FileAllowed(['jpg','png'], 'Images Only!' )])
    firstname = StringField('First Name', validators = [DataRequired()])
    lastname = StringField('Last Name', validators = [DataRequired()])
    username=StringField('Username', validators=[DataRequired()])
    email = EmailField('Email Address', [validators.DataRequired(), validators.Email()])
    password = PasswordField('Password', validators = [DataRequired()])
    confirmpass= PasswordField('Confirm Password', validators=[DataRequired()])
    location = StringField('Location', validators = [DataRequired()])
    biography = StringField('Biography', validators = [DataRequired()])

class CreatePostForm(FlaskForm):
    photo = FileField('Photo', validators = [FileRequired(), FileAllowed(['jpg','png'], 'Images Only!')])
    caption = StringField('Add a caption', validators = InputRequired())
        
class Search(FlaskForm):
    search=StringField('Search')