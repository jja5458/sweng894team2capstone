from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

scheduler = BackgroundScheduler()
jobstores = {
    'default': SQLAlchemyJobStore(url='sqlite:///jobs.sqlite')
}
scheduler.configure(jobstores=jobstores)
scheduler.start()

def send_email(recipient, subject, body):
    try:
        sender_email = "julioaira4@gmail.com"
        sender_password = "afkr dnih sazq xxkl"  # Your app-specific password

        # Create the email
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))

        # Connect to the Gmail SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipient, msg.as_string())
        server.quit()
    except Exception as e:
        print(f'Failed to send email: {e}')

def schedule_email(recipient, subject, body, send_time):
    send_time = datetime.strptime(send_time, '%Y-%m-%d %H:%M:%S')
    scheduler.add_job(send_email, 'date', run_date=send_time, args=[recipient, subject, body])

def get_scheduled_emails():
    jobs = scheduler.get_jobs()
    emails = [{'id': job.id, 'recipient': job.args[0], 'subject': job.args[1], 'send_time': job.next_run_time} for job in jobs]
    return emails
