import { AppState } from '../models/AppState';
import { Task } from '../models/Task';

type Listener = () => void;
type Action = {
    type: string;
    payload?: Task | { id: string; };
};

function isTask(payload: any): payload is Task {
    return (
        payload &&
        typeof payload === 'object' &&
        'id' in payload &&
        'title' in payload &&
        'completed' in payload
    );
}


export class Store {
    private state: AppState;
    private listeners: Listener[] = [];

    constructor(initialState: AppState) {
        this.state = initialState;
    }

    getState(): AppState {
        return this.state;
    }

    dispatch(action: Action) {
        switch (action.type) {
            case 'ADD_TASK': {
                if (!isTask(action.payload)) {
                    console.warn('ADD_TASK action received without a valid payload.');
                    return;
                }
              
                const taskExists = this.state.tasks.some(task => task.id === action.payload?.id);
                if (!taskExists) {
                    const newTask = {
                        // Directly access properties since isTask ensures their existence
                        id: action.payload?.id,
                        title: action.payload?.title,
                        description: action.payload?.description, // This can be undefined if not provided, which is fine
                        completed: action.payload?.completed ?? false,
                    };
                    this.state = {
                        ...this.state,
                        tasks: [...this.state.tasks, newTask],
                    };
                }
                break;
            }
                            
        
            case 'UPDATE_TASK': {
                // Directly access properties since TypeScript understands action.payload to be Task here
                const taskExists = this.state.tasks.some(task => task.id === (action.payload?.id ?? ''));
                if (!taskExists) {
                    console.warn(`Task with ID ${action.payload?.id} not found.`);
                    return;
                }
                this.state = {
                    ...this.state,
                    tasks: this.state.tasks.map(task =>
                        task.id === action.payload?.id ? { ...task, ...action.payload } : task
                    ),
                };
                break;
            }
            case 'DELETE_TASK': {
                // Directly filter out the task without checking `taskExists` since filtering inherently handles "not found" cases
                this.state = {
                    ...this.state,
                    tasks: this.state.tasks.filter(task => task.id !== (action.payload?.id ?? '')),
                };
                break;
            }
            default:
                // Optionally handle unknown action types
                break;
        }
    
        // Notify all listeners about the state update
        this.listeners.forEach(listener => listener());
    }
    

    updateState(newState: AppState): void {
        this.state = newState;
        this.listeners.forEach(listener => listener());
    }

    subscribe(listener: Listener): () => void {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}
