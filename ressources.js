/* =============================================================================
   ESPACE FORMATEUR — IOBSP NIVEAU 2 (BLOC 2)
   FICHIER DE DONNÉES — c'est le SEUL fichier à modifier.

   Mode d'emploi
   -------------
   1. Chaque journée est un bloc entre accolades dans la liste "journees".
   2. Les ressources des journées produites pointent vers les dossiers livrés
      avec ce portail (liens relatifs). Ne pas renommer ces dossiers : le lien
      casserait. Une valeur vide = la ligne s'affiche en gris « à renseigner ».
   3. "statut" pilote l'affichage de la carte :
         "disponible"  -> la carte affiche les ressources + les liens stagiaires
         "a_produire"  -> la carte affiche le bandeau « kit non disponible »
   4. "format" pilote la pastille de couleur :
         "presentiel" | "visio" | "da"
   5. Les liens stagiaires se copient en un clic depuis le portail : ajouter
      autant de lignes { libelle: "...", url: "..." } que nécessaire.
   6. Aucune date ne figure dans ce fichier : le portail resserre d'une session
      à l'autre. Le champ "session" ci-dessous est facultatif.
   7. Ne rien changer d'autre : ni les noms de champs, ni les virgules.
   ============================================================================= */

const RESSOURCES = {

  parcours: "IOBSP Niveau 2 — Bloc 2",
  session:  "",   // facultatif : nom du groupe ou de la session. Vide = rien ne s'affiche.

  journees: [
    {
      num: "J1",
      titre: "Les savoirs généraux",
      format: "presentiel",
      statut: "disponible",
      intervenant: "",
      duree: "7 h",
      resume: "Contexte de l'activité, catégories réglementaires, droit commun, conditions d'accès, LCB-FT, modalités de distribution.",
      ressources: {
        support:        "j1_support_animateur/",
        bookFormateur:  "j1_book_formateur/",
        bookStagiaire:  "j1_book_stagiaire/",
        memo:           "j1_fiches_memo/",
      },
      liens: [
        { libelle: "Exercice d'entraînement", url: "" },
        { libelle: "Évaluation de la journée", url: "" },
      ]
    },

    {
      num: "J2",
      titre: "Services de paiement et introduction au crédit à la consommation",
      format: "da",
      statut: "a_produire",
      intervenant: "",
      duree: "7 h",
      resume: "Version présentielle à produire. Le distanciel accompagné est en ligne.",
      ressources: {
        support:        "",
        bookFormateur:  "",
        bookStagiaire:  "",
        memo:           "",
      },
      liens: [
        { libelle: "Modules du distanciel accompagné", url: "" },
        { libelle: "Évaluation globale de la journée", url: "" },
      ]
    },

    {
      num: "J3",
      titre: "Le crédit à la consommation et les crédits de trésorerie",
      format: "presentiel",
      statut: "disponible",
      intervenant: "",
      duree: "7 h",
      resume: "Champ d'application, publicité et FIPEN, formes de crédit, fichiers, caractéristiques financières, garanties, constitution du dossier.",
      ressources: {
        support:        "j3_support_animateur/",
        bookFormateur:  "j3_book_formateur/",
        bookStagiaire:  "j3_book_stagiaire/",
        deroule:        "j3_deroule/",
        memo:           "j3_fiche_memo/",
      },
      liens: [
        { libelle: "Exercice d'entraînement", url: "" },
        { libelle: "Évaluation de la journée", url: "" },
      ]
    },

    {
      num: "J4",
      titre: "Règles de bonne conduite et contrôles",
      format: "presentiel",
      statut: "disponible",
      intervenant: "",
      duree: "7 h",
      resume: "Règles de bonne conduite, rémunération et conflits d'intérêts, surendettement, infractions et sanctions, dispositif de contrôle.",
      ressources: {
        support:        "j4_support_animateur/",
        bookFormateur:  "j4_book_formateur/",
        bookStagiaire:  "j4_book_stagiaire/",
        deroule:        "j4_deroule/",
        memo:           "j4_fiche_memo/",
      },
      liens: [
        { libelle: "Exercice d'entraînement", url: "" },
        { libelle: "Évaluation de la journée", url: "" },
      ]
    },

    {
      num: "J5",
      titre: "Éthique et déontologie",
      format: "da",
      statut: "a_produire",
      intervenant: "",
      duree: "7 h",
      resume: "Numérotation à confirmer avec la J4. Le distanciel accompagné est en ligne.",
      ressources: {
        support:        "",
        bookFormateur:  "",
        bookStagiaire:  "",
        memo:           "",
      },
      liens: [
        { libelle: "Modules du distanciel accompagné", url: "" },
        { libelle: "Évaluation globale de la journée", url: "" },
      ]
    },

    {
      num: "J6",
      titre: "Crédit immobilier 1/3 — le cadre, les acteurs, les chiffres",
      format: "presentiel",
      statut: "disponible",
      intervenant: "S. Pena C.",
      duree: "7 h",
      resume: "Encadrement, intervenants du marché, publicité foncière, caractéristiques financières et TAEG.",
      ressources: {
        support:        "j6_support_animateur/",
        bookFormateur:  "j6_book_formateur/",
        bookStagiaire:  "j6_book_stagiaire/",
        deroule:        "j6_deroule/",
        memo:           "j6_fiche_memo/",
      },
      liens: [
        { libelle: "Module 1 — l'encadrement du crédit immobilier", url: "" },
        { libelle: "Module 2 — les intervenants du marché", url: "" },
        { libelle: "Module 3 — la publicité foncière", url: "" },
        { libelle: "Module 4 — les caractéristiques financières", url: "" },
        { libelle: "Évaluation globale de la journée", url: "" },
      ]
    },

    {
      num: "J7",
      titre: "Notions générales sur les garanties",
      format: "da",
      statut: "a_produire",
      intervenant: "",
      duree: "7 h",
      resume: "Version présentielle à produire. Le distanciel accompagné et les 5 capsules vidéo sont en ligne.",
      ressources: {
        support:        "",
        bookFormateur:  "",
        bookStagiaire:  "",
        memo:           "",
      },
      liens: [
        { libelle: "Module 1 — l'hypothèque légale spéciale", url: "" },
        { libelle: "Module 2 — l'hypothèque conventionnelle", url: "" },
        { libelle: "Module 3 — la caution solidaire", url: "" },
        { libelle: "Module 4 — la caution mutuelle", url: "" },
        { libelle: "Module 5 — le nantissement", url: "" },
        { libelle: "Évaluation globale de la journée", url: "" },
      ]
    },

    {
      num: "J8",
      titre: "Crédit immobilier 2/3 — les prêts et les montages",
      format: "visio",
      statut: "disponible",
      intervenant: "B. Silvestri",
      duree: "7 h",
      resume: "Prêts du secteur libre, VEFA et CCMI, prêts réglementés, épargne et employeur, investissement locatif, AERAS.",
      ressources: {
        support:        "j8_support_animateur/",
        bookFormateur:  "j8_book_formateur/",
        bookStagiaire:  "j8_book_stagiaire/",
        deroule:        "j8_deroule/",
        memo:           "j8_fiche_memo/",
      },
      liens: [
        { libelle: "Module 1 — les prêts du secteur libre", url: "" },
        { libelle: "Module 2 — VEFA et CCMI", url: "" },
        { libelle: "Module 3 — les prêts réglementés et aidés", url: "" },
        { libelle: "Module 4 — l'épargne et l'employeur", url: "" },
        { libelle: "Module 5 — l'investissement locatif", url: "" },
        { libelle: "Module 6 — AERAS et droits de l'emprunteur", url: "" },
        { libelle: "Évaluation globale de la journée", url: "" },
      ]
    },

    {
      num: "J9",
      titre: "Connaissances générales du crédit et regroupement — le cadre",
      format: "presentiel",
      statut: "disponible",
      intervenant: "B. Silvestri",
      duree: "7 h",
      resume: "Matin : rappel actif A.2, crédits aux professionnels, endettement et reste à vivre. Après-midi : le regroupement, son encadrement, ses types et son coût réel.",
      ressources: {
        support:        "j9_support_animateur/",
        bookFormateur:  "j9_book_formateur/",
        bookStagiaire:  "j9_book_stagiaire/",
        deroule:        "j9_deroule/",
        memo:           "j9_fiche_memo/",
      },
      liens: [
        { libelle: "Exercice d'entraînement", url: "" },
        { libelle: "Évaluation de la journée", url: "" },
      ]
    },

    {
      num: "J10",
      titre: "Les assurances emprunteurs",
      format: "da",
      statut: "a_produire",
      intervenant: "",
      duree: "7 h",
      resume: "Version présentielle à produire. Le distanciel accompagné (6 modules + évaluation globale) est complet.",
      ressources: {
        support:        "",
        bookFormateur:  "",
        bookStagiaire:  "",
        memo:           "",
      },
      liens: [
        { libelle: "Module 1 — à quoi sert l'assurance emprunteur", url: "" },
        { libelle: "Module 2 — risques couverts et exclusions", url: "" },
        { libelle: "Module 3 — contrat groupe ou contrat individuel", url: "" },
        { libelle: "Module 4 — le libre choix, de Lagarde à Lemoine", url: "" },
        { libelle: "Module 5 — équivalence de garanties et substitution", url: "" },
        { libelle: "Module 6 — la tarification du risque", url: "" },
        { libelle: "Évaluation globale de la journée", url: "" },
      ]
    },

    {
      num: "J11",
      titre: "Le regroupement de crédits en pratique",
      format: "presentiel",
      statut: "disponible",
      intervenant: "M. Morouche",
      duree: "7 h",
      resume: "Bonne information, entretien et constitution du dossier, balance bancaire, situation contractuelle du foyer, trois études de cas.",
      ressources: {
        support:        "j11_support_animateur/",
        bookFormateur:  "j11_book_formateur/",
        bookStagiaire:  "j11_book_stagiaire/",
        deroule:        "j11_deroule/",
        memo:           "j11_fiche_memo/",
      },
      liens: [
        { libelle: "Exercice d'entraînement", url: "" },
        { libelle: "Évaluation de la journée", url: "" },
      ]
    },

    {
      num: "J12",
      titre: "Clôture du parcours — le dossier, puis la consolidation",
      format: "presentiel",
      statut: "disponible",
      intervenant: "M. Morouche",
      duree: "7 h",
      resume: "Matin : la FISE, l'offre de prêt, le mandat et la constitution du dossier. Après-midi : consolidation du crédit à la consommation et quatre cas pratiques.",
      ressources: {
        support:        "j12_support_animateur/",
        bookFormateur:  "j12_book_formateur/",
        bookStagiaire:  "j12_book_stagiaire/",
        deroule:        "j12_deroule/",
        memo:           "j12_fiche_memo/",
      },
      liens: [
        { libelle: "Exercice d'entraînement", url: "" },
        { libelle: "Évaluation finale du parcours", url: "" },
      ]
    }

  ]
};
