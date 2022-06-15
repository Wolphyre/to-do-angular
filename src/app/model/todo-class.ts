export class TodoClass {

    name: string;
    private tags: string[];
    private readonly _creationDate: number;
    priority: TodoPriority;

    constructor(name: string, tags: string[] = [], creationDate: Date = new Date(), priotiry: TodoPriority = TodoPriority.LOW) {
        this.name = name
        this.tags = tags
        this._creationDate = creationDate.getTime()
        this.priority = priotiry
    }

    get creationDate(): Date {
        return new Date(this._creationDate)
    }
    get color(): string{
        return getPriorityColor(this.priority)
    }

    // get description(): string{
    //     return getPriorityString(this.priority)
    // }
}

// export enum TodoPriority {
//     DONE = { order: -1, name: 'completato', color: 'gray' },
//     LOW = { order: 0, name: 'bassa', color: 'green' },
//     MEDIUM = { order: 1, name: 'media', color: 'yellow' },
//     HIGH = { order: 2, name: 'alta', color: 'orange' },
//     VERYHIGH = { order: 3, name: 'molto alta', color: 'red' }
// }

export enum TodoPriority {
    DONE = -1,
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    VERYHIGH = 3
}

export function getPriorityColor(priority: TodoPriority): string{
    switch (priority) {
        case TodoPriority.DONE:
            return 'gray';
        case TodoPriority.LOW:
            return 'Green';
        case TodoPriority.MEDIUM:
            return 'yellow';
        case TodoPriority.HIGH:
            return 'orange';

        default:
            return 'red';
    }


}
