from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user
from app.services.teacher import get_all_teachers

evaluation_bp = Blueprint('EvaluationRoute', __name__,
                          url_prefix='/evaluation')


@evaluation_bp.get('/')
@login_required
def get_evaluation():
    return render_template('evaluation.jinja')


@evaluation_bp.get('/add')
@login_required
def get_add_evaluation():
    access_token = request.cookies.get('access_token')

    res, error = get_all_teachers(access_token)

    if error is not None:
        print(error)
        flash(error, 'danger')
        return redirect(url_for('EvaluationRoute.get__evaluation'))

    teachers = res.json()['result']

    context = {
        'teachers': teachers
    }

    return render_template('evaluation_add.jinja', **context)
