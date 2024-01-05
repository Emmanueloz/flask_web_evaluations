import requests
from app.config import Config
URL_BASE = Config.URL_API + '/auth'


def post_login_api(user_form):
    url = f'{URL_BASE}/login'
    response = requests.post(url, json=user_form)

    if response.status_code != 200:
        return response, response.json()['msg']

    return response, None
