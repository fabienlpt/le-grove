import { 
    communication,
    equipements,
    evenementNumerique,
    evenementPhysique,
    gererDechets,
    goodies,
    identifierEnjeux,
    partenairesEcoresponsables,
    restauration,
    transportsLogements,
} from "./sections";

export const documentation = [
    {
        parent: 'débuter l\'organisation',
        slug: 'identifier-enjeux',
        content: identifierEnjeux,
    },
    {
        parent: 'débuter l\'organisation',
        slug: 'evenement-physique',
        content: evenementPhysique,
    },
    {
        parent: 'débuter l\'organisation',
        slug: 'evenement-numerique',
        content: evenementNumerique,
    },
    {
        parent: 'les points de la norme',
        slug: 'partenaires-ecoresponsables',
        content: partenairesEcoresponsables,
    },
    {
        parent: 'les points de la norme',
        slug: 'transports-logements',
        content: transportsLogements,
    },
    {
        parent: 'les points de la norme',
        slug: 'restauration',
        content: restauration,
    },
    {
        parent: 'les points de la norme',
        slug: 'gerer-dechets',
        content: gererDechets,
    },
    {
        parent: 'les points de la norme',
        slug: 'goodies',
        content: goodies,
    },
    {
        parent: 'les points de la norme',
        slug: 'equipements',
        content: equipements,
    },
    {
        parent: 'les points de la norme',
        slug: 'communication',
        content: communication,
    },
];