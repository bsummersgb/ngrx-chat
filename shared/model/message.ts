/* A message will:
    -have a unique identifier
    -belong to a given message thread
    -have text content i.e. the actual message typed by the participant
    -and this obviously belongs to an individual participant
    -have the time it was sent
*/

export interface Message {
    id: number;
    threadId: number;
    partcipantId: number;
    text: string;
    timestamp: number;
}