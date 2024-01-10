export interface ElectionState {
    id: number;
    stateName: string;
    electoralVote: number;
    winnerTakeAll: boolean;
    candidates: ElectionCandidate[];
}
export interface ElectionCandidate {
    fullName: string;
    lastName: string;
    party: string;
    isWinner: boolean;
    vote: number;
    id: number;
}