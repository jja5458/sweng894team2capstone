import pandas as pd
from pdfminer.high_level import extract_text
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Example function to extract text from PDF
def extract_pdf_text(filepath):
    return extract_text(filepath)

# Load your dataset (assuming you have labeled some data)
data = {
    'filepath': [
        'C:\\Users\\julio\\sweng894team2capstone\\resumes\\PT_Carino_Resume.pdf',
        'C:\\Users\\julio\\sweng894team2capstone\\resumes\\SWENG_Aira IV_Resume.pdf'
    ],
    'label': ['Engineering', 'HR']
}
df = pd.DataFrame(data)

# Extract text from PDFs
df['text'] = df['filepath'].apply(extract_pdf_text)

# Text vectorization
vectorizer = TfidfVectorizer(max_features=1000)
X = vectorizer.fit_transform(df['text'])
y = df['label']

# Split the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict and evaluate the model
predictions = model.predict(X_test)
print(classification_report(y_test, predictions))
