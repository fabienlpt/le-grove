import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <form>
                <div>
                    <label> Nom :</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label> Prénom :</label>
                    <input type="text" name="firstname" required />
                </div>
                <div>
                    <label> Numéro de téléphone :</label>
                    <input type="tel" name="number" required />
                </div>
                <div>
                    <label> E-mail :</label>
                    <input type="email" name="mail" required />
                </div>
                <div>
                    <label> Description :</label>
                    <input type="textarea" name="description"/>
                </div>
                <input type="button" name="description" value="Envoyer" />
            </form>
        </div>
    );
}

export default Contact;
