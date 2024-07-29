from flask import Flask, request, jsonify
from models import Resume  # Assuming a model `Resume` exists

app = Flask(__name__)

@app.route('/update-match-percentage', methods=['POST'])
def update_match_percentage():
    data = request.get_json()
    resume_id = data['resume_id']
    new_percentage = data['new_percentage']

    resume = Resume.query.get(resume_id)
    if not resume:
        return jsonify({"error": "Resume not found"}), 404

    resume.manual_match_percentage = new_percentage
    resume.save()  # Assuming a save method exists to commit changes to the database

    return jsonify({"message": "Match percentage updated successfully"}), 200
