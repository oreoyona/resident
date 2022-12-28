import os
from sqlalchemy import Column, String, Integer, LargeBinary
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
DB_HOST = os.getenv('DB_HOST', 'localhost:5432')
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', 'C87054bNjiPLQ23SlOoslecarabin')
DB_NAME = os.getenv('DB_NAME', 'resident')
database_path = "postgresql://{}:{}@{}/{}".format(
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)

db = SQLAlchemy()

def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    
class Hospital(db.Model):
    __tablename__ = 'hospitals'
    id = Column('hospital_id', Integer, primary_key=True)
    name = Column(String(100), nullable=False, unique=True)
    user = db.relationship('Users', backref='user', lazy=True)
    
    
class Users(db.Model, UserMixin):
    __tablename = 'users'
    id = Column('user_id', Integer, primary_key=True)
    username = Column(String(50), unique=True,  nullable=False)
    name = Column(String(200), nullable=False)
    email = Column(String(120), nullable=False)
    password_hash = Column(String(128))
    profile_picture = Column(LargeBinary)
    hospital_id = Column(Integer, db.ForeignKey('hospitals.hospital_id'), nullable=False)
    

    @property
    def password(self):
        raise AttributeError("Password is not a readable entity")
    
    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def verify_password(self, password):
        return check_password_hash(self.password_hash)
    
    

    
class Comments(db.Model):
    __tablename__ = 'comments'
    id = Column('comment_id', Integer, primary_key=True)
    content = Column(String(4000), nullable=False)
    author_id = Column(Integer, nullable=False)
    post_id = Column(Integer, nullable=False)
     
class Post(db.Model):
    __tablename__  = 'posts'
    id = Column('post_id', Integer, primary_key=True)
    author_id = Column(Integer, nullable=False)
    content = Column(String(4000),  nullable=False)
    comment_count = Column(Integer, nullable=False)
    like_count = Column(Integer, nullable=False)
    
   
    
    
    
    