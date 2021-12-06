export declare const OnMessage: (event?: string | undefined) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare const OnConnect: () => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare const OnDisconnect: () => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare const EmitOnSuccess: (event?: string | undefined) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare const EmitOnFail: (event?: string | undefined) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare const MessageBody: (key?: string | undefined) => (target: any, propertyKey: string, parameterIndex: number) => any;
export declare const ConnectedSocket: (key?: string | undefined) => (target: any, propertyKey: string, parameterIndex: number) => any;
export declare const Clients: (key?: string | undefined) => (target: any, propertyKey: string, parameterIndex: number) => any;
export declare const SocketId: (key?: string | undefined) => (target: any, propertyKey: string, parameterIndex: number) => any;
export declare const ConnectedIds: (key?: string | undefined) => (target: any, propertyKey: string, parameterIndex: number) => any;