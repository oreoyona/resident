import functools
from flask import Blueprint, g, redirect, render_template, request, session, jsonify, abort
from models import Interne
from werkzeug.security import check_password_hash, generate_password_hash


######################################################################################
##                                                                                  ##
## Config for the /auth endpoint                                                    ##
##                                                                                  ##
######################################################################################

bp = Blueprint('auth', __name__, url_prefix='/auth')
onSuccess = {
    "success": True,
    "message": 'OK'
    }

onFailure = {
    "success": False,
    "message": 'Error',
    }


@bp.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        data = request.json
        error = None
        message = None
        try:
            email = data['email']
            password = data['password']
            user = Interne.query.filter_by(email=email).one()
            if user['password'] == check_password_hash(password):
                return jsonify(onSuccess) 

        except:
            abort(404)
    else:
        return render_template('static/index.html')
    


@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    try:
        email = data['email']
        nom = data['nom']
        password = data['password']

        newInterne = Interne(
        email=email,
        nom=nom,
        password=generate_password_hash(password)
        )

        all_users = Interne.query.all()

        if email not in all_users:
            Interne.insert(newInterne)

    except:
        abort(404)

    return jsonify(onSuccess)