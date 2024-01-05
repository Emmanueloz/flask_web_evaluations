from flask_login import LoginManager
from flask import session
from app.models import UserModel

login_manager = LoginManager()
login_manager.login_view = 'AuthRoute.get_login'


@login_manager.user_loader
def load_user(user_id):
    print(user_id)
    user = session.get('user', None)
    if user is None:
        return None
    return UserModel(user)
