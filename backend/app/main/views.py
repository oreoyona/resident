from flask import render_template
from . import profil
from . import index

@profil.route('/')
def render_profil():
    return render_template("static/index.html")

@index.route('/')
def index():
    return render_profil()

