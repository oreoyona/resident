import os
from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin








DB_HOST = os.getenv('DB_HOST', 'localhost:5432')
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', '1234')
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
    
    
class Interne(UserMixin, db.Model):
    __tablename__ = 'internes'
    
    id = Column(Integer, primary_key = True)
    name = Column(String(64))
    email = Column(String(64), unique=True, index=True)
    promotion = Column(String(4))
    biographie = Column(String(128))
    password = Column(String(128))
    
    def __init__(self, name, email, password, promotion='D3', biographie='Hey je suis un interne'):
        self.name = name
        self.email = email
        self.promotion = promotion
        self.biographie = biographie
        self.password = password
        
    def insert(self):
        db.session.add(self)
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit
        
    def update(self):
        db.session.commit(self)
        
    def format(self):
        return {
            'id': self.id,
            'nom': self.name,
            'email': self.email,
            'biographie': self.biographie
        }
        
    
        
    @property
    def password():
        raise AttributeError('Password is not a readable attribute')
    
from . import login_manager
## login_manager is required for flask-login to work
@login_manager.user_loader
def load_user(user_id):
    return Interne.query.get(int(user_id))