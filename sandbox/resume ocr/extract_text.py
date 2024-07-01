import pytesseract
from PIL import Image
import os

# Set the tesseract command path explicitly
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Path to the image file
image_path = r'C:\Users\julio\sweng894team2capstone\sandbox\resume ocr\resume.jpeg'

# Function to perform OCR and categorize text
def extract_and_categorize_text(image_path):
    # Open the image file
    image = Image.open(image_path)
    
    # Perform OCR on the image
    text = pytesseract.image_to_string(image)
    
    # Initialize categories
    skills = []
    education = []
    experiences = []

    # Categorize text (basic categorization based on keywords)
    for line in text.split('\n'):
        if 'skill' in line.lower():
            skills.append(line)
        elif 'educat' in line.lower():
            education.append(line)
        elif 'experience' in line.lower():
            experiences.append(line)

    return skills, education, experiences

# Extract text and categorize
skills, education, experiences = extract_and_categorize_text(image_path)

# Save the categorized text to files
def save_to_file(category, lines, filename):
    with open(filename, 'w') as file:
        file.write("\n".join(lines))

base_dir = r'C:\Users\julio\sweng894team2capstone\sandbox\resume ocr'

save_to_file('Skills', skills, os.path.join(base_dir, 'skills.txt'))
save_to_file('Education', education, os.path.join(base_dir, 'education.txt'))
save_to_file('Experiences', experiences, os.path.join(base_dir, 'experiences.txt'))

print("Text extracted and categorized successfully!")
