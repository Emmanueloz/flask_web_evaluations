import requests
from app.config import Config
URL_BASE = Config.URL_API + '/evaluation'


def delete_evaluation(access_token, evaluation_id):
    url = URL_BASE + f'/{evaluation_id}'
    response = requests.delete(
        url, headers={'Authorization': 'Bearer ' + access_token})

    if response.status_code != 200:
        return None, response.json()['msg']

    if not response.json():
        return None, "Error en el servidor"

    if response.json()['status'] == "error":
        return None, response.json()['msg']

    return response, None
