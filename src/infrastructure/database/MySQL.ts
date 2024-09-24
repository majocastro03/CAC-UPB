import mysql, {Connection} from 'mysql2/promise'
class MySQL {
    private static instance: MySQL;
    private connection: Connection | null = null;

    private constructor() {}

    public static async getInstance(): Promise<MySQL> {
        if (!this.instance) {
            this.instance = new MySQL();
            await this.instance.connect();
        }
        return this.instance;
    }

    private async connect(): Promise<void> {
        this.connection = await mysql.createConnection({
            host: 'localhost', // Cambia esto si tu servidor MySQL está en otro lugar
            user: 'tu_usuario', // Tu usuario de MySQL
            password: 'tu_contraseña', // Tu contraseña de MySQL
            database: 'tu_base_de_datos', // Nombre de tu base de datos
        });

        console.log('Conexión a la base de datos MySQL establecida');
    }

    public getConnection(): Connection {
        if (!this.connection) {
            throw new Error('La conexión no está establecida');
        }
        return this.connection;
    }

    public async close(): Promise<void> {
        if (this.connection) {
            await this.connection.end();
            console.log('Conexión a la base de datos MySQL cerrada');
        }
    }
}

export default MySQL;
