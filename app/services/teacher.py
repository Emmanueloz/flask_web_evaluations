import requests
from app.config import Config
URL_BASE = Config.URL_API + '/teacher'


def get_all_teachers(access_token='', page=1, limit=10):
    URL = URL_BASE + f'?page={page}&limit={limit}'

    response = requests.get(
        URL_BASE, headers={'Authorization': 'Bearer ' + access_token})

    if response.status_code != 200:
        return None, response.json()['msg']

    if not response.json():
        return None, "Error en el servidor"

    if response.json()['status'] == "error":
        return None, response.json()['msg']

    return response, None
