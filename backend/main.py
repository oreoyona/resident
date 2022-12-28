from flask import Flask, render_template
from flask_migrate import Migrate
from models import *
import mimetypes

################################################################################################
## the code below is import for the initialization of the app                               ####
################################################################################################

#the code below allows the js in our index.html file to be read properly
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

################################################################################################
app = Flask(__name__)

################################################################################################

app = Flask(__name__, static_url_path='',
            static_folder='templates', template_folder='templates')

##################################################################################################
# Configuration for our application
setup_db(app)
migrate = Migrate(app, db)


################################################################################################
# Routes
###############################################################################################
@app.route('/')
def home():
    return render_template('index.html')








##################################################################################################
# Run the app
##################################################################################################
if __name__ == '__main__':
    app.run()