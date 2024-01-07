from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user
from app.services.teacher import get_all_teachers
from app.services.evaluation import delete_evaluation
from app.config import Config

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
        flash(error, 'danger')

        if error == 'Token has expired':
            return redirect(url_for('AuthRoute.get_logout'))

        return redirect(url_for('EvaluationRoute.get_evaluation'))

    teachers = res.json()['result']

    context = {
        'teachers': teachers,
        'URL_API': Config.URL_API
    }

    return render_template('evaluation_add_edit.jinja', **context)


@evaluation_bp.get('/edit/<id>')
@login_required
def get_edit_evaluation(id):
    access_token = request.cookies.get('access_token')

    res, error = get_all_teachers(access_token)

    if error is not None:
        flash(error, 'danger')

        if error == 'Token has expired':
            return redirect(url_for('AuthRoute.get_logout'))

        return redirect(url_for('EvaluationRoute.get_evaluation'))

    teachers = res.json()['result']
    context = {
        'id': id,
        'teachers': teachers,
        'URL_API': Config.URL_API
    }
    return render_template('evaluation_add_edit.jinja', **context)


@evaluation_bp.get('/delete/<id>')
@login_required
def get_detail_evaluation(id):
    access_token = request.cookies.get('access_token')
    res, error = delete_evaluation(access_token, id)

    if error is not None:
        flash(error, 'danger')

        if error == 'Token has expired':
            return redirect(url_for('AuthRoute.get_logout'))

        return redirect(url_for('EvaluationRoute.get_evaluation'))

    if res.json()['status'] != 'ok':
        flash(res.json()['msg'], 'danger')
        return redirect(url_for('EvaluationRoute.get_evaluation'))

    flash("Evaluación eliminado correctamente", 'success')
    return redirect(url_for('EvaluationRoute.get_evaluation'))
