
function updateProfileData(profileData) {
    const photo = document.querySelector('[data-id="profile.photo"]')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector('[data-id="profile.name"]')
    name.innerText = profileData.name

    const job = document.querySelector('[data-id="profile.job"]')
    job.innerText = profileData.job

    const location = document.querySelector('[data-id="profile.location"]')
    location.innerText = profileData.location

    const phone = document.querySelector('[data-id="profile.phone"]')
    phone.innerHTML = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.querySelector('[data-id="profile.email"]')
    email.innerHTML = profileData.email
    email.href = `mailto:${profileData.email}`

}

function softSkillsData(profileData) {
    const softSkills = document.querySelector('[data-id="profile.skills.softSkills"]')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function hardSkillsData(profileData) {
    const HardSkills = document.querySelector('[data-id="profile.skills.hardSkills"]')
    // HardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" class="logo"></li>`).join('')
}

function languageData(profileData) {
    const language = document.querySelector('[data-id="profile.languages"]')
    language.innerHTML = profileData.languages.map(language => `<li class="languages">${language}</li>`).join('')
}

function portfolioData(profileData) {
    const portfolio = document.querySelector('[data-id="profile.portfolio"]')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `<li>
                    <span class="title">${project.name}</span>
                    <a id="link" href="${project.url}" target="_blank">${project.url}</a>
                </li>`
    }).join('')
}


function coursesData(profileData) {
    const courses = document.querySelector('[data-id="profile.courses"]')
    courses.innerHTML = profileData.courses.map(c => {
        return `
        <li>
                            <h2>${c.name}</h2>
                            <span ${c.periodo ? 'class="date"' : 'class="time"'}>${c.period}</span>
                            <a href="teste.com" target="_blank">${c.description}</a>
                        </li>
        `
    }).join('')
}

(async () => {

    const profileData = await fetchProfileData()
    softSkillsData(profileData)
    updateProfileData(profileData)
    hardSkillsData(profileData)
    languageData(profileData)
    portfolioData(profileData)
    coursesData(profileData)
})()

