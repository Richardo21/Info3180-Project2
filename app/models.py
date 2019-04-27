from . import db
from werkzeug.security import generate_password_hash


class Users(db.Model): 
    __tablename__='users'
    id = db.Column(db.Integer, primary_key= True)
    username = db.Column(db.String(20))
    password = db.Column(db.String(20))
    firstname = db.Column(db.String(30))
    lastname = db.Column(db.String(30))
    email = db.Column(db.String(60))
    location = db.Column(db.String(30))
    biography = db.Column(db.String(300))
    profile_photo = db.Column(db.String(100))
    joined_on = db.Column(db.String(10))
    
    def __init__(self, username,password, firstname, lastname, email,location, biography,profile_photo,joined_on):
        self.username = username       
        self.password = generate_password_hash(password, method = 'pbkdf2:sha256')
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.location = location
        self.biography = biography
        self.profile_photo = profile_photo
        self.joined_on = joined_on
            
    
class Posts(db.Model):
    __tablename__='posts'
    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.Integer)
    photo = db.Column(db.String(100))
    caption = db.Column(db.String(100))
    created_on = db.Column(db.String(10))
    
    def __init__(self,user_id,photo,caption,created_on):
        self.user_id = user_id
        self.photo = photo
        self.caption = caption
        self.created_on = created_on
    
class Likes(db.Model):
    __tablename__='likes'
    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.Integer)
    post_id = db.Column(db.Integer)
    
    def __init__(self,user_id, post_id):
        self.user_id = user_id
        self.post_id = post_id
    
class Follows(db.Model):
    __tablename__='follows'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    follower_id = db.Column(db.Integer)
    
    def __init__(self,user_id, follower_id):
        self.user_id = user_id
        self.follower_id = follower_id
    