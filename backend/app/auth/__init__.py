from flask import Blueprint


######################################################################################
##                                                                                  ##
## Config for the /auth endpoint                                                    ##
##                                                                                  ##
######################################################################################

auth = Blueprint('auth', __name__, url_prefix='/auth')

from . import views

