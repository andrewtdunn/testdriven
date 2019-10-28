# services/users/project/tests/utils.py

import json
from project import db
from project.api.models import User


def add_user(username, email, password, admin=False):
    user = User(username=username, email=email, password=password)
    user.admin = admin
    db.session.add(user)
    db.session.commit()
    return user

def get_auth_token(client):
    resp_login = client.post(
        '/auth/login',
        data=json.dumps({
            'email': 'test@test.com',
            'password': 'test'
        }),
        content_type='application/json'
    )
    return json.loads(resp_login.data.decode())['auth_token']