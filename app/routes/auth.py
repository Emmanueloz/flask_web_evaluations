from flask import Blueprint, request, render_template, redirect, url_for, flash
from app.models import UserForm

auth_bp = Blueprint('AuthRoute', __name__)


@auth_bp.get('/login')
def get_login():
    user_form = UserForm()
    context = {'form': user_form, 'title': 'Login'}
    return render_template('auth.jinja', **context)


@auth_bp.post('/login')
def post_login():
    user_form = UserForm()
    if not user_form.validate_on_submit():
        flash('Error en el formulario')
        return redirect(url_for('AuthRoute.get_login'))

    print(user_form.data)
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
