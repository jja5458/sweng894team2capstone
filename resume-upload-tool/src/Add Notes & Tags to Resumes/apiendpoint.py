from flask import Flask, request, jsonify
from models import Resume  # Assuming a model `Resume` exists

app = Flask(__name__)

@app.route('/add-notes-tags', methods=['POST'])
def add_notes_tags():
    data = request.get_json()
    resume_id = data['resume_id']
    notes = data.get('notes', '')
    tags = data.get('tags', [])

    resume = Resume.query.get(resume_id)
    if not resume:
        return jsonify({"error": "Resume not found"}), 404

    resume.notes = notes
    resume.tags = tags
    resume.save()  # Assuming a save method exists to commit changes to the database

    return jsonify({"message": "Notes and tags added successfully"}), 200
