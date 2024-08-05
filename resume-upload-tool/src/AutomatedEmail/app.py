from flask import Flask, request, render_template, redirect, url_for, flash
from scheduler import schedule_email, get_scheduled_emails

app = Flask(__name__)
app.secret_key = 'supersecretkey'

@app.route('/')
def index():
    emails = get_scheduled_emails()
    return render_template('schedule_email.html', emails=emails)

@app.route('/schedule', methods=['POST'])
def schedule():
    recipient = request.form['recipient']
    subject = request.form['subject']
    body = request.form['body']
    send_time = request.form['send_time']

    if recipient and subject and body and send_time:
        schedule_email(recipient, subject, body, send_time)
        flash('Email scheduled successfully!')
    else:
        flash('All fields are required!')

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
