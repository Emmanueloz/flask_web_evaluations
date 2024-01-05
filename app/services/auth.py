import requests
from app.config import Config
URL_BASE = Config.URL_API + '/auth'


def post_login_api(user_form):
    try:
        url = f'{URL_BASE}/login'
        response = requests.post(url, json=user_form)

        if response.status_code != 200:
            return response, response.json()['msg']

        if not response.json():
            return response, "Error en el servidor"

        if response.json()['status'] == 'error':
            return response, response.json()['msg']

        return response, None
    except Exception as e:
        print(e)
        return None, "Error en el servidor"
