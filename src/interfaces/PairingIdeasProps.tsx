interface PairingIdea {
    id: number;
    title: string;
    description: string;
    image?: string;
}

export default interface PairingIdeasSectionProps {
    ideas: PairingIdea[];
}
  