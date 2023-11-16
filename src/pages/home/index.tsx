import React from 'react';
import './style.css';

const Home: React.FC = () => {
    return (
        <div className='page-container'>
            <div className='head'>
                <div>
                    <p className="footer_cita"> le  Guide  <span className="style_responsable">  Responsable  </span>  de  l’Organisation  Verte &nbsp; &nbsp; <span className="style_event">  Evènementielle.  </span> </p>
                </div>
            </div>

            <div className='bloc_one'>
                <div className='bloc_rond'>
                    <div className='rond'>
                        <img src='/MISSION/flèche.png' />
                    </div>
                </div>
                <div className='bloc_one_blocs'>
                    <div className='bloc_vert'>
                        <p> Le GROVE : Le Guide Responsable de l’Organisation Verte Evènementiel, est un collectif qui s’active dans la transition écologique des entreprises et des créateurs d’événements.
                            Nous avons cœur à rendre accessible les notions d’écoresponsabilité autour de l’événementiel, un espace dédié au partage de la culture et du savoir.
                            Le tout s’appuyant sur une norme ISO 20121 qui normalise l’organisation de n’importe quel évènement de manière écoresponsable.
                        </p>
                    </div>
                    <div className='bloc_img'>
                        <img src='/MISSION/imgblocone.png' />
                    </div>
                </div>

            </div>

            <div>
                <div className="marquee-rtl">
                    <div className='flex_bandeau'>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                        <div>
                            <img src='favicon.ico' />
                            <p> &nbsp; Découvrez nos missions </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bloc_two'>
                <div className='bloc_iso'>
                    <div>
                        <p className='iso'> ISO 20121 </p>
                        <p> C'est <span className='quoi'> quoi</span> ?</p>
                    </div>
                    <div>
                        <img src="MISSION/Component 3.png" alt="" />
                    </div>
                </div>
                <div className='bloc_two_vert'>
                    <div>
                        <p> ISO 20121 vous offre des lignes directrices et les meilleures pratiques pour vous aider à gérer votre événement et à maîtriser son impact social, économique et environnemental. La moindre action a son importance, qu’il s’agisse de préférer l’eau du robinet à l’eau en bouteille en plastique ou d’encourager l’utilisation des transports publics. La norme vous aide également à réduire les coûts inutiles.
                            L’approche souple adoptée dans la norme permet d’utiliser ISO 20121 pour tous types d’événements, des festivals de musique aux excursions scolaires.
                            Si vous êtes impliqués dans le secteur événementiel, cette norme est faite pour vous !
                            Le tout s’appuyant sur une norme ISO 20121 qui normalise l’organisation de n’importe quel évènement de manière écoresponsable.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bloc_three'>
                <div className='grand_bloc'>
                    <div className='un'>
                        <div className='titreiso'>
                            <p>La norme ISO 20121 contribue aux <span className='dvlp_style'>Objectifs de développement durable</span>  suivants :</p>
                        </div>
                        <div>
                            <div className='nombre'>
                                <div>
                                    <p> 3 </p>
                                </div>
                                <div>
                                    <p> 5 </p>
                                </div>
                                <div>
                                    <p> 6 </p>
                                </div>
                                <div>
                                    <p> 7 </p>
                                </div>
                                <div>
                                    <p> 8 </p>
                                </div>
                                <div>
                                    <p> 9 </p>
                                </div>
                                <div>
                                    <p> 10 </p>
                                </div>
                                <div>
                                    <p> 11 </p>
                                </div>
                                <div>
                                    <p> 12 </p>
                                </div>
                                <div>
                                    <p> 13 </p>
                                </div>
                                <div>
                                    <p> 16 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='deux'>
                        <div>
                            <input type="button" value="En savoir plus" />
                        </div>
                    </div>

                </div>

            </div>
            <div className='bloc_four'>
                <div className='bloc_action'>
                    <div>
                        <p className=''> Vous avez envie d’agir ? </p>
                    </div>
                    <div>
                        <input type="button" value="Découvrez nos ressources" />
                        <input type="button" value="Contactez-nous" />
                    </div>
                </div>

                <div className='bloc'>
                    <div>
                        <img src="MISSION/MicrosoftTeams-image (1).png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
