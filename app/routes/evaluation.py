from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user

evaluation_bp = Blueprint('EvaluationRoute', __name__,
                          url_prefix='/evaluation')


@evaluation_bp.get('/')
@login_required
def get_evaluation():
    return render_template('evaluation.jinja')


@evaluation_bp.get('/add')
@login_required
def get_add_evaluation():
    return render_template('evaluation_add.jinja')
