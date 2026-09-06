export type Representative = {
  name: string;
  role: string;
  phone: string | null;
  image: string;
};

export const contactPlaceholder = "/contacts/representative-placeholder.svg";

export const clashRepresentatives: Representative[] = [
  {
    name: "Vicky Nandy",
    role: "Competition Coordinator",
    phone: "01813166652",
    image: contactPlaceholder,
  },
  {
    name: "Anup Dipta",
    role: "Competition Coordinator",
    phone: "01306279571",
    image: contactPlaceholder,
  },
];




export const pendingRepresentative = (
  role = "Competition Representative",
): Representative => ({
  name: "To be announced",
  role,
  phone: null,
  image: contactPlaceholder,
});

// These are the verified committee contacts available in the supplied rulebook.
// Add future central committee members here; both the contact page and cards update automatically.
export const organizingCommitteeContacts: Representative[] =
  [
    {
      name: "Azmayen",
      role: "Management Committee",
      phone: "01644177102",
      image: contactPlaceholder,
    },
    {
      name: "Anup Dipta",
      role: "Competition Coordinator",
      phone: "01306279571",
      image: contactPlaceholder,
    },
  ];
