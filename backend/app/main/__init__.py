from flask import Blueprint


######################################################################################
##                                                                                  ##
## Config for the /auth endpoint                                                    ##
##                                                                                  ##
######################################################################################

profil = Blueprint('me', __name__, url_prefix='/me')
index = Blueprint('home', __name__, url_prefix='/home')
from . import views

