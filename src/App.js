import './App.css';
import Certificate from './component/Certificate'
import About from './component/About'
import Education from './component/Education'
import Experience from './component/Experience'
import Skills from './component/Skills'
import {faFacebookSquare, faGithubSquare} from "@fortawesome/free-brands-svg-icons";

function App() {
    const person = {
        avatar: 'photo.png',
        name: 'Miguel Gonzalez',
        email: 'gonzalezmiguel122343@gmail.com',
        phones: '+57 321 4181812 / +57 321 9069839',
        profession: 'FrontEnd & UI Designer Developer',
        bio: 'Desarrollador FrontEnd, Diseño de interfaces, Maquetación, UI, UX, Design First to Mobile.',
        address: 'Carrera. 81d #14-4 Kennedy, Bogota D.C. Colombia',
        social: [
            {name: 'github', icon: faGithubSquare, url: 'https://github.com/Miguel122343'},
            {name: 'facebook', icon: faFacebookSquare, url: 'https://www.facebook.com/profile.php?id=100017555028400'},
        ],
        experience: [
            {id: 1, jobTitle: 'FrontEnd', company: 'Inversiones Git de Venezuela', startDate: 'Sept 2019', endDate: 'Jun 2020', jobDescription: 'Forme Parte Del Equipo de Desarrollador FrontEnd'},
            {id: 2, jobTitle: 'FrontEnd', company: 'InnovaTech', startDate: 'Jul 2020', endDate: 'Present', jobDescription: 'Desarrollo e integración de Maqueta. Equipo Desarrollador FrontEnd'},
            {id: 3, jobTitle: 'FrontEnd', company: 'Brandlive', startDate: 'Nov 2021', endDate: 'Sept 2022', jobDescription: 'Desarrollo de Comercio Electrónico con Vtex Framework.'},
        ],
        education: [
            {degree: '1° y 2° año de Bachillerato', institution: 'U.E.Instituto Eduardo Rohl,', startDate: 'Oct 2014', endDate: 'Jul 2016', description: 'Estudios de 1° y 2° año de Bachiler.'},
            {degree: '3°, 4° y 5° año de Bachillerato', institution: 'U.E. Antonio Sandoval', startDate: 'Oct 2016', endDate: 'Jun 2019', description: 'Estudios de 3°, 4° y 5° año de Bachiller, Obteniendo el Bachillerato a mis 17 años.'},
            {degree: 'Bachillerato', institution: 'U.E. Antonio Sandoval', startDate: 'Jun 2019', description: 'Certificado de Promoción de Bachiller de la República Bolivariana de Venezuela.' }
        ],
        certificate: [
            {
                image: 'la-guia-completa.png',
                name: 'React - La Guía Completa: Hooks Context Redux MERN + 15 app',
                instructor: 'Juan Pablo De La Torre Valdez'
            },
            {
                image: 'api-rest-con-laravel-5-y-tokens-con-eloquent-api-resource-y-passport.png',
                name: 'API Rest con Laravel 5, Resource y Passport',
                instructor: 'Israel Parra'
            },
            {
                image: 'certificado-conceptos-de-arquitectura-en-laravel-como-funciona.png',
                name: 'Conceptos de arquitectura en laravel ¿cómo funciona?',
                instructor: 'Israel Parra'
            },
            {
                image: 'certificado-curso-de-laravel-8-y-vue-3-con-vuex-4-vue-router-utilizando-composition-api.png',
                name: 'Curso de Laravel 8 y Vue 3 con Vuex 4 + Vue Router, utilizando Composition API',
                instructor: 'Israel Parra'
            },
            {
                image: 'certificado-curso-de-laravel-9.png',
                name: 'Curso de Laravel 9',
                instructor: 'Israel Parra'
            },
            {
                image: 'curso-de-desarrollo-movil-con-vuejs-2-y-quasar-app-offline-con-localstorage.png',
                name: 'Desarrollo móvil con Vuejs 2 y quasar',
                instructor: 'Israel Parra'
            },
            {
                image: 'curso-de-vuejs-2-vuex-con-typescript.png',
                name: 'Curso de Vuejs 2, Vuex con TypeScript',
                instructor: 'Israel Parra'
            },
            {
                image: 'laravel-8-y-vue-3-con-vuex-4-vue-router-utilizando-composition-api.png',
                name: 'Curso de Laravel 8 y Vue 3 con Vuex 4 + Vue Router, utilizando Composition API',
                instructor: 'Israel Parra',
            },
            {
                image: 'primeros-pasos-con-vue-3-y-vuex-4.png',
                name: 'Primeros pasos con Vue 3 y Vuex 4',
                instructor: 'Israel Parra'
            },
            {
                image: 'vuejs-2-y-vuex-desde-0-con-las-mejores-practicas.png',
                name: 'Vuejs 2 y Vuex desde 0 con las mejores prácticas',
                instructor: 'Israel Parra'
            }
        ],
        skills: [
            {name: 'HTML5', percentage: '90'},
            {name: 'CSS', percentage: '70'},
            {name: 'JavaScript', percentage: '70'},
            {name: 'Laravel', percentage: '60'},
            {name: 'Vue', percentage: '70'},
            {name: 'React', percentage: '60'},
            {name: 'Bootstrap 4.5', percentage: '90'},
            {name: 'Bootstrap 5', percentage: '70'},
            {name: 'Tailwind', percentage: '40'},
        ]
    };
    return (
      <div className='container-fluid'>
          <div className="row">
              <div className='col-xs-12 col-lg-4 p-0'>
                  <About
                      avatar={person.avatar}
                      name={person.name}
                      profession={person.profession}
                      bio={person.bio}
                      address={person.address}
                      social={person.social}
                      email={person.email}
                      phones={person.phones}
                  />
              </div>
              <div className='col-xs-12 col-lg-8 p-0'>
                  <div className='content'>
                      <Education education={person.education} />
                      <Experience experience={person.experience} />
                      <Certificate certificate={person.certificate} />
                      <Skills skills={person.skills} />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
