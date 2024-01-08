from flask import Blueprint, request, render_template
from flask_login import login_required, current_user

teacher_bp = Blueprint("TeacherRoute", __name__, url_prefix="/teacher")


@teacher_bp.get("/")
@login_required
def get_teacher():
    return render_template("teacher.jinja")
