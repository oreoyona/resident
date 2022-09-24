import functools
from flask import Blueprint, g, redirect, render_template, request, session, jsonify
from models import Interne
from werkzeug.security import check_password_hash, generate_password_hash


######################################################################################
##                                                                                  ##
## Config for the /auth endpoint                                                    ##
##                                                                                  ##
######################################################################################

bp = Blueprint('auth', __name__, url_prefix='/auth')
@bp.route('/login', methods=['POST'])
def login():
    data = request.json

    return jsonify(
        {
            "success": True,
            "message": "user logged in",
        }
    )
