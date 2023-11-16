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
        type: 'list',
        content: identifierEnjeux,
    },
    {
        parent: 'débuter l\'organisation',
        slug: 'evenement-physique',
        type: 'subsections',
        content: evenementPhysique,
    },
    {
        parent: 'débuter l\'organisation',
        slug: 'evenement-numerique',
        type: 'subsections',
        content: evenementNumerique,
    },
    {
        parent: 'les points de la norme',
        slug: 'partenaires-ecoresponsables',
        type: 'subsections',
        content: partenairesEcoresponsables,
    },
    {
        parent: 'les points de la norme',
        slug: 'transports-logements',
        type: 'table',
        content: transportsLogements,
    },
    {
        parent: 'les points de la norme',
        slug: 'restauration',
        type: 'subsections',
        content: restauration,
    },
    {
        parent: 'les points de la norme',
        slug: 'gerer-dechets',
        type: 'subsections',
        content: gererDechets,
    },
    {
        parent: 'les points de la norme',
        slug: 'goodies',
        type: 'subsections',
        content: goodies,
    },
    {
        parent: 'les points de la norme',
        slug: 'equipements',
        type: 'subsections',
        content: equipements,
    },
    {
        parent: 'les points de la norme',
        slug: 'communication',
        type: 'subsections',
        content: communication,
    },
];