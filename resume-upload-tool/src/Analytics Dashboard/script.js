// script.js
function viewResume() {
    // Example data
    const resume = {
        skills: ['Python', 'JavaScript', 'SQL', 'React'],
        experienceYears: 4,
        educationLevel: 'Bachelor\'s'
    };

    const jobDescription = {
        requiredSkills: ['Python', 'JavaScript', 'SQL'],
        minExperienceYears: 5,
        requiredEducationLevel: 'Bachelor\'s'
    };

    // Calculate Skills Match
    const skillsMatch = resume.skills.filter(skill => jobDescription.requiredSkills.includes(skill)).length / jobDescription.requiredSkills.length;
    const skillsScore = Math.round(skillsMatch * 100);
    document.getElementById('skillsScore').textContent = skillsScore;

    // Calculate Experience
    const experienceScore = resume.experienceYears >= jobDescription.minExperienceYears ? 100 : (resume.experienceYears / jobDescription.minExperienceYears * 100);
    document.getElementById('experienceScore').textContent = Math.round(experienceScore);

    // Calculate Education
    const educationScore = (resume.educationLevel === jobDescription.requiredEducationLevel) ? 100 : 0;
    document.getElementById('educationScore').textContent = educationScore;

    // Calculate Overall
    const overallScore = (skillsScore + experienceScore + educationScore) / 3;
    document.getElementById('overallScore').textContent = Math.round(overallScore);
}
