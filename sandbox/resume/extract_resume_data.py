import fitz  # PyMuPDF
import re
import os

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def extract_section(text, start_pattern, end_pattern):
    start = re.search(start_pattern, text, re.IGNORECASE)
    end = re.search(end_pattern, text, re.IGNORECASE)
    if start and end:
        return text[start.start():end.start()].strip()
    elif start:
        return text[start.start():].strip()
    return ""

def main(pdf_path):
    # Extract all text from PDF
    text = extract_text_from_pdf(pdf_path)
    
    # Debug print: Uncomment the following line to see the extracted text
    # print(text)

    # Define more flexible patterns to identify sections
    skills_pattern_start = r"Skills|Competencies"
    edu_pattern_start = r"Education|Academic Background|Educational Qualifications"
    exp_pattern_start = r"Experience|Professional Background|Work History|Career Summary"
    section_end_pattern = r"References|Certifications|Publications|Skills|Education|Experience|End of Resume"
    
    # Extract sections
    skills = extract_section(text, skills_pattern_start, section_end_pattern)
    education = extract_section(text, edu_pattern_start, section_end_pattern)
    experience = extract_section(text, exp_pattern_start, section_end_pattern)
    
    # Define paths for output files
    base_dir = os.path.dirname(pdf_path)
    skills_path = os.path.join(base_dir, "skills.txt")
    edu_path = os.path.join(base_dir, "education.txt")
    exp_path = os.path.join(base_dir, "experience.txt")
    
    # Write output to files
    with open(skills_path, 'w') as file:
        file.write(skills)
    with open(edu_path, 'w') as file:
        file.write(education)
    with open(exp_path, 'w') as file:
        file.write(experience)

    print("Data extraction complete. Files saved to:", base_dir)
    print("Skills extracted:", bool(skills))
    print("Education extracted:", bool(education))
    print("Experience extracted:", bool(experience))

if __name__ == "__main__":
    resume_path = r"C:\Users\julio\sweng894team2capstone\sandbox\resume\resume.pdf"
    main(resume_path)
