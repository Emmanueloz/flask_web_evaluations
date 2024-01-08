from flask import Blueprint, request, render_template, redirect, url_for, flash
from flask_login import login_required, current_user
from app.models import TeacherForm

teacher_bp = Blueprint("TeacherRoute", __name__, url_prefix="/teacher")


@teacher_bp.get("/")
@login_required
def get_teacher():
    return render_template("teacher.jinja")


@teacher_bp.get("/add")
@login_required
def get_add_teacher():
    context = {
        "action": "agregar",
        "form": TeacherForm()
    }
    return render_template("teacher_form.jinja", **context)


@teacher_bp.post("/add")
@login_required
def post_add_teacher():

    teacher_form = TeacherForm()

    if not teacher_form.validate_on_submit():
        flash("Datos no validos")
        return redirect(url_for("TeacherRoute.get_add_teacher"))

    print(teacher_form.data)

    return redirect(url_for("TeacherRoute.get_add_teacher"))
