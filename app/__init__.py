from flask import Flask
from .config import Config
from .utils.fl_login import login_manager
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    login_manager.init_app(app)
    CORS(app)

    from .routes import index_bp
    app.register_blueprint(index_bp)

    from .routes import auth_bp
    app.register_blueprint(auth_bp)

    from .routes import evaluation_bp
    app.register_blueprint(evaluation_bp)

    from .routes import teacher_bp
    app.register_blueprint(teacher_bp)

    return app
