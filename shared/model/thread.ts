/* This defines a message thread. A thread will have:
    - a list of participants (e.g. Vinnie, Kelvin, Glen) 
    - and each participant has a certain number of unread messages
        -> this allows us to populate a the unread messages counter for each participant */

export interface Thread {
    id: number;
    messageIds: number[];
    participants: {[key:number]: number}; /* This is TS syntax to define a map 
                                                -the KEY of the map is a number type (the participant ID in this case)
                                                -the VALUE of the map is also a number i.e. the number of unread 
                                                messages for this participant (could also be an object or a number) */

}