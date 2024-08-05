import unittest
from datetime import datetime, timedelta
from scheduler import schedule_email, get_scheduled_emails, send_email

class TestEmailScheduler(unittest.TestCase):

    def test_schedule_email(self):
        recipient = 'test@example.com'
        subject = 'Test Subject'
        body = 'This is a test email.'
        send_time = (datetime.now() + timedelta(minutes=1)).strftime('%Y-%m-%d %H:%M:%S')

        schedule_email(recipient, subject, body, send_time)
        emails = get_scheduled_emails()
        self.assertTrue(any(email['recipient'] == recipient and email['subject'] == subject for email in emails))

    def test_send_email(self):
        recipient = 'test@example.com'
        subject = 'Test Subject'
        body = 'This is a test email.'

        try:
            send_email(recipient, subject, body)
        except Exception:
            self.fail('send_email() raised Exception unexpectedly!')

if __name__ == '__main__':
    unittest.main()
