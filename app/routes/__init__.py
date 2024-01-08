
from .auth import auth_bp
from .evaluation import evaluation_bp

from .teacher import teacher_bp

from flask import Blueprint, render_template
from flask_login import login_required

index_bp = Blueprint('IndexRoute', __name__)


@index_bp.get('/')
@login_required
def index():
    return render_template('index.jinja')
