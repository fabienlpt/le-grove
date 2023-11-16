import React from 'react';
import './style.css';

const Contact: React.FC = () => {
    return (
        <div className='page-container'>
            <div className="bloc_flex">
                <div>
                    <div>
                        <h1> <span className='contactez'> Contactez </span> <br /> <span className='nous'> nous </span> </h1>
                    </div>
                    <div>
                        <p className='text'>
                            Bienvenue dans l'univers de l'événementiel éco-responsable!
                            Nous sommes ravis de répondre à toutes vos questions, commentaires et idées. N'hésitez pas à nous contacter pour en savoir plus sur la création d'événements durables et respectueux de l'environnement.
                        </p>
                    </div>
                </div>

                <form>
                    <div className='nom'>
                        <label> Nom :</label>
                        <div>
                            <input type="text" placeholder="" name="name" required />
                            <input type="text" name="firstname" required />
                        </div>
                    </div>
                    <div className='tel'>
                        <label> Numéro de téléphone :</label>
                        <input type="text" required />
                    </div>
                    <div className='message'>
                        <label> Message :</label>
                        <input type="textarea" name="message" />
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" id="checkbox" name="checkbox" />
                        <label>J’accepte la politique de confidentialité</label>
                    </div>
                    <div className='button'>
                        <input type="button" name="description" value="Envoyer" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
