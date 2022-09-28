import profile
from flask import Flask
from flask_cors import CORS
import mimetypes





################################################################################################
## the code below is import for the initialization of the app                               ####
################################################################################################

#the code below allows the js in our index.html file to be read properly
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

################################################################################################
from flask_login import LoginManager
login_manager = LoginManager()
login_manager.login_view = 'auth.login'



from .models import setup_db
def create_app(config=None):
    app = Flask(__name__, static_url_path='', static_folder='templates/static', template_folder='templates')
    setup_db(app)
    cors = CORS(app, resources = {r"/api/*": {"origins": "*"}})
    
    login_manager.init_app(app)
    
    
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
    from .auth import auth as auth_blueprint 
    from .main import profil as profile_blueprint
    from .main import index as home_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    app.register_blueprint(profile_blueprint, url_prefix='/me')
    app.register_blueprint(home_blueprint, url_prefix='/')
    
   
    return app
    
    