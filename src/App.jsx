
import './App.css'

function App() {
    return (
        <div className="container">
            <img className="profile-img" src="profile.img.jpeg" alt="Foto de Perfil" />
            <h2>Samira Ferreira</h2>
            <p>Belo Horizonte/MG</p>
            <p>Fron-end dev</p>
            <div className="social">
                <div className="social-box">
                    <a href="#">Facebook</a>
                </div>
                <div className="social-box">
                    <a href="#">Twitter</a>
                </div>
                <div className="social-box">
                    <a href="#">Instagram</a>
                </div>
                <div className="social-box">
                    <a href="https://www.linkedin.com/in/samira-ferreira-887a081a0/" target="_blank">LinkedIn</a>
                </div>
                <div className="social-box">
                    <a href="https://github.com/samiferreira" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default App
