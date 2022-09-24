import functools
from flask import (
    Blueprint, g, redirect, render_template, request, session, jsonify
)



from werkzeug.security import check_password_hash, generate_password_hash


bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    print(data)
    return jsonify(
        {
            "success": True,
            "message": "user logged in"
        }
    )