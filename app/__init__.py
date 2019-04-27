import os
from flask import Flask
# from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
csrf = CSRFProtect(app)
# bcrypt = Bcrypt(app)

app.config['SECRET_KEY'] = 'v\xf9\xf7\x11\x13\x18\xfaMYp\xed_\xe8\xc9w\x06\x8e\xf0f\xd2\xba\xfd\x8c\xda'
app.config['SQLALCHEMY_DATABASE_URI'] =  'postgres://dsobtevklbcrwn:9bdceffb0c450af251f49b61a602a143c8fa1c9984629a73ce09c0984f0101ba@ec2-54-197-234-117.compute-1.amazonaws.com:5432/d7dkif2v6s8cde'

#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql: //infoproj2:info3180@localhost/infoproj2'     

PRO_PIC_UPLOAD_FOLDER = "./app/static/profile_photos"
POSTS_UPLOAD_FOLDER = "./app/static/posts_photos"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True # added just to suppress a warning

db = SQLAlchemy(app)

#Flask-Login LoginManager
# login_manager = LoginManager()
# login_manager.init_app(app)
# login_manager.login_view = 'login'

app.config.from_object(__name__)
from app import views,models
#intense-basin-58864   #name of project on heroku