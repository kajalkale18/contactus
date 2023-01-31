import uuid
from flask import Blueprint , request , jsonify
from firebase_admin import firestore
from flask_cors import cross_origin
db = firestore.client()
user_Ref = db.collection('user');

userAPI = Blueprint('userAPI' , __name__)

@userAPI.route('/add',methods = ['POST'])
@cross_origin()
def create():
    try:
        id = uuid.uuid4()
        user_Ref.document(id.hex).set(request.json)
        return jsonify({"success": True}) , 200
    except Exception as e:
        return f"An Error Occured: {e}"    


@userAPI.route('/data')
def get():
	return {
		'Name':"rutuja",
		"email":"kajal@mail.com",
		"subject":"python",
		"message":"hello"
		}
