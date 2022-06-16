import { TodoPriority } from "./todo-class";



export interface TodoInterface {
    id?:string;
    name:string;
    tags: string[];
    priority: TodoPriority;
    creationDate: number;
}

// export function fromPriorityToDesc(priority: TodoPriority): string{
//     switch (priority) {
//         case TodoPriority.DONE:
//             return 'gray';
//         case TodoPriority.LOW:
//             return 'Green';
//         case TodoPriority.MEDIUM:
//             return 'yellow';
//         case TodoPriority.HIGH:
//             return 'orange';
//         default:
//             return 'red';
//     }
// }

// export function fromPriorityToColor(priority: TodoPriority): string{
//     switch (priority) {
//         case TodoPriority.DONE:
//             return 'gray';
//         case TodoPriority.LOW:
//             return 'Green';
//         case TodoPriority.MEDIUM:
//             return 'yellow';
//         case TodoPriority.HIGH:
//             return 'orange';
//         default:
//             return 'red';
//     }
// }