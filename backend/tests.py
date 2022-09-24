import os
import json
import unittest
from flask_sqlalchemy import SQLAlchemy
from app import create_app


class AppTestCase(unittest.TestCase):

    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client

    def teardown():
        pass

    def test_login(self):
        info = {
            'email': 'example@gmail.com',
            'password': 'some@passordIsVery123Difficult!'
        }
        res = self.client().post('/auth/login', json=info)
        data = json.loads(res.data)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        
        
        
        
        
        
if __name__ == "__main__":
    unittest.main()
