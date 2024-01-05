from flask import Blueprint, request, render_template, redirect, url_for, flash
from app.models import UserLogin
from app.services.auth import post_login_api

auth_bp = Blueprint('AuthRoute', __name__)


@auth_bp.get('/login')
def get_login():
    user_form = UserLogin()
    context = {'form': user_form, 'title': 'Login'}
    return render_template('auth.jinja', **context)


@auth_bp.post('/login')
def post_login():
    user_form = UserLogin()
    if not user_form.validate_on_submit():
        print(user_form.errors)
        flash('Error en el formulario')
        return redirect(url_for('AuthRoute.get_login'))

    response, error = post_login_api(user_form.data)
    if error is not None:
        print(error)
        flash(error)
        return redirect(url_for('AuthRoute.get_login')), response.status_code

    print(response)
    return redirect(url_for('AuthRoute.get_login'))


@auth_bp.get('/logout')
def get_logout():
    # Lógica para cerrar sesión
    pass


@auth_bp.get('/signup')
def get_signup():
    # Lógica para el registro de usuarios
    pass


@auth_bp.post('/signup')
def post_signup():
    pass
