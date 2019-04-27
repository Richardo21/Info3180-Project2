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
app.config['SQLALCHEMY_DATABASE_URI'] =  'postgres://vwfeollskqmjyw:1d738da99074015b148d72cfd94ea584dcb39e81c1bb197fb9da65455c756b0f@ec2-50-17-227-28.compute-1.amazonaws.com:5432/dc8lr6j69aeqjt'

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