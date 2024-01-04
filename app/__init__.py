from flask import Flask, render_template
from .config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    @app.route("/")
    def index():
        return render_template("index.jinja")

    from .routes import auth_bp
    app.register_blueprint(auth_bp)

    return app
