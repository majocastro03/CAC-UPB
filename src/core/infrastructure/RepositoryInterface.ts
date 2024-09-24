// src/core/infrastructure/RepositoryInterface.ts

export interface RepositoryInterface<T> {
    findAll(): Promise<T[]>;                      // Método para obtener todos los registros
    findOneById(id: number): Promise<T | null>;   // Método para obtener un registro por ID
    exists(id: number): Promise<boolean>;          // Método para verificar si un registro existe
    save(entity: T): Promise<void>;                // Método para guardar un nuevo registro
    update(id: number, partial: Partial<T>): Promise<T | null>; // Método para actualizar un registro
    delete(id: number): Promise<void>;             // Método para eliminar un registro
}
