import os
from flask import Flask, request, jsonify, abort, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import mimetypes
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

def create_app(config=None):
    app = Flask(__name__, 
                static_url_path='', 
                static_folder='templates/static', 
                template_folder='templates')
    
    cors = CORS(app, resources = {r"/api/*": {"origins": "*"}})
    
    
    @app.after_request
    def after_request(response):
        response.headers.add(
            'Access-Control-Allow-Headers',
            'Content-Type, Authorization, true'
        )
        
        response.headers.add(
            'Access-Control-Allow-Methods',
            'GET, PATCH, DELETE, OPTIONS'
        )
        
        return response
    from . import auth
    app.register_blueprint(auth.bp)
    
    @app.route('/')
    def index():
        return render_template("static/index.html")
    return app
    
    