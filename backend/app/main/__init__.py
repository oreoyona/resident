from flask import Blueprint


######################################################################################
##                                                                                  ##
## Config for the /auth endpoint                                                    ##
##                                                                                  ##
######################################################################################

profil = Blueprint('me', __name__, url_prefix='/')

from . import views

